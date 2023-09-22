import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router){}
  adminLogin!: FormGroup;

  ngOnInit(){
  this.adminLogin = new FormGroup({
    username: new FormControl(null,[Validators.minLength(9),Validators.required]),
    password: new FormControl(null,[Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}'),Validators.required])
  });
}
onSubmit() {
  console.log(this.adminLogin);
}

}
