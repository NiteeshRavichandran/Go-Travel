import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  buses: any []= [];
  selectedBusId: string = '';

  constructor(private authService: AuthService) { }
  logout(){
    this.authService.logout();
  }
}
