import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData); 
      },
      error => {
        console.log(error);
      }
      );
    }

  }
}
