import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  errorMessage: any;

  constructor(private router: Router, private authService: AuthService){}
  adminLogin!: FormGroup; 

  ngOnInit(){
  this.adminLogin = new FormGroup({
    username: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required])
  });
}
onSubmit() {
  if(this.adminLogin.valid){

    const email = this.adminLogin.value.username;
    const password = this.adminLogin.value.password;

    this.authService.signIn(email, password).subscribe(resData => {
      console.log(resData); 
      this.authService.setAdmin();
      this.router.navigate(['/admin/home']);
    },
    error => {
      // console.log(error);
      this.errorMessage = error;
      this.adminLogin.reset();
    }
    );
  }
}

}
