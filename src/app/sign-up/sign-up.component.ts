import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router,private authService: AuthService){}
  signUp!: FormGroup;
  errorMessage =''
  criteria = {
    lowerCaseMet: false,
    upperCaseMet: false,
    digitMet: false,
    specialCharMet: false,
    lengthMet: false,
  };

  matchConfirmPassword(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.signUp.get('password').value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  checkPasswordCriteria() {
    const passwordControl = this.signUp.get('password');

    if (passwordControl) {
      const passwordValue = passwordControl.value;

      this.criteria.lowerCaseMet = /[a-z]/.test(passwordValue);
      this.criteria.upperCaseMet = /[A-Z]/.test(passwordValue);
      this.criteria.digitMet = /\d/.test(passwordValue);
      this.criteria.specialCharMet = /[@#$%^&+=!]/.test(passwordValue);
      this.criteria.lengthMet = passwordValue.length >= 8;
    }
  }
  
  
  
  ngOnInit(){
  this.signUp = new FormGroup({
    username: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required]),
    confirmpassword: new FormControl(null)
  });

  this.signUp
      .get('confirmpassword')
      .setValidators([
        Validators.required,
        this.matchConfirmPassword.bind(this),
      ]);

}
onSubmit() {
  if(this.signUp.valid){
    const email = this.signUp.value.username;
      const password = this.signUp.value.password;

      this.authService.signUp(email, password).subscribe(resData => {
        // console.log(resData); 
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = error;
        this.signUp.reset();

      }
      );
  }
}

}
