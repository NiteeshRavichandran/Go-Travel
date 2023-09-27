import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private router: Router){}
  adminLogin!: FormGroup; 

  ngOnInit(){
  this.adminLogin = new FormGroup({
    username: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[a-zA-Z0-9@#$%^&+=!]{8,}$'),Validators.required])
  });
}
onSubmit() {
  console.log(this.adminLogin);
}

}
