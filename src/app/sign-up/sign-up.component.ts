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

  ngOnInit(){
  this.signUp = new FormGroup({
    // name: new FormControl(null,[Validators.required]),
    // phone: new FormControl(null,[Validators.pattern(/^[6-9]\d{9}$/),Validators.required]),
    username: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required]),
    confirmpassword: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required])
  });
}
onSubmit() {
  if(this.signUp.valid){
    const email = this.signUp.value.username;
      const password = this.signUp.value.password;

      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData); 
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
      );
  }
}

}
