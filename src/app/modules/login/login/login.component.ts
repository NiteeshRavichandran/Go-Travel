import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  constructor(private router: Router, private authService: AuthService){}
  loginForm!: FormGroup;


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
      // this.router.navigate(['/login']);
      // this.loggedIn=true;
      const email = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.signIn(email, password).subscribe(resData => {
        console.log(resData); 
        this.router.navigate(['/user/home']);
      },
      error => {
        // console.log(error);
        this.errorMessage = error;
        this.loginForm.reset();
      }
      );
    }

  }
}
