import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  buses: any []= [];
  selectedBusId: string = '';

  constructor(private http: HttpClient,private seatService: SeatService, private router: Router) { }
   ngOnInit(): void {
     this.http.get('https://go-travel-42246-default-rtdb.firebaseio.com/busses.json').subscribe((posts: any) => {
      console.log(posts);
      this.buses = Object.values(posts);
     });
   }

   getSeatKeys(bus: any): string[] {
    return Object.keys(bus.seats);
  }
 
  viewSeats(busid: string){
    this.seatService.setSeatData(busid);   
    setTimeout(() => {
      this.router.navigate(['/seats']);
    }, 800);
  }                                                                                                                                                                                         

}
