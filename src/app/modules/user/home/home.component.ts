import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from 'src/app/services/seat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buses: any []= [];
  selectedBusId: string = '';

  constructor(private http: HttpClient,private seatService: SeatService, private router: Router) { }
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
    setTimeout(() => {
      this.router.navigate(['user/seats']);
    }, 800);
  }                                                                                                                                                                                         

}
