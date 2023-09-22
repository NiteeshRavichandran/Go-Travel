import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router){}
  loginForm!: FormGroup;
 
  signUp!: FormGroup;

  user = 'login';
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.minLength(9),Validators.required]),
      password: new FormControl(null,[Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}'),Validators.required])
    });
  }

  logger(log: string){
    this.user=log;
  }


  onSubmit() {
    console.log(this.loginForm);
  }
}
