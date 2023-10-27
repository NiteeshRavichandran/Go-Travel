import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SeatService } from 'src/app/services/seat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buses: any []= [];
  selectedBusId: string = '';
  viewseats= false;

  constructor(private http: HttpClient,private seatService: SeatService, private router: Router, private authService: AuthService) { }
   ngOnInit(): void {
     this.http.get('https://go-travel-42246-default-rtdb.firebaseio.com/busses.json').subscribe((posts: any) => {
      // console.log(posts);
      this.buses = Object.values(posts);
     });
   }

   getSeatKeys(bus: any): string[] {
    return Object.keys(bus.seats);
  }
 
  viewSeats(busid: string){
    this.seatService.setSeatData(busid);   
    this.seatService.setBusData(busid);
    setTimeout(() => {
      this.router.navigate(['/admin/cancelTickets']);
      this.viewseats=true;
    }, 800);
  }

  logout(){
    this.authService.logout();
  }

}
