import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router){}
  signUp!: FormGroup;

  ngOnInit(){
  this.signUp = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    username: new FormControl(null,[Validators.email,Validators.required]),
    phone: new FormControl(null,[Validators.pattern(/^[6-9]\d{9}$/),Validators.required]),
    password: new FormControl(null,[Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}'),Validators.required]),
    confirmpassword: new FormControl(null,[Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}'),Validators.required])
  });
}
onSubmit() {
  if(this.signUp.valid){
    this.router.navigate(['/login']);
  }
}

}
