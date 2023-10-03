import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from '../seat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  buses: any []= [];
  selectedBusId: string = '';
  viewseats= false;

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
    this.seatService.setBusData(busid);
    setTimeout(() => {
      this.router.navigate(['/seats']);
      this.viewseats=true;
    }, 800);
  }

}
