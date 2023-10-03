import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient, private bookingService: BookingService, private seatService: SeatService) { }

  passengerDataArray = this.bookingService.getconfirmSeats();
  totalSeatPrice: number;
  
  ngOnInit(){
    console.log(this.passengerDataArray + 'pass');
    this.totalSeatPrice = this.passengerDataArray.reduce((total, data) => total + data.seatPrice, 0);
  }

  onSubmit(){
    for(const dta of this.passengerDataArray){

      const data = {
        seatStatus: 'booked',
        seatPrice: dta.seatPrice,
        passengerDetails: {
         passengerName: dta.passengerData.passengerName,
         passengerAge: dta.passengerData.passengerAge,
         passengerGender: dta.passengerData.passengerGender,
        },
      }

      const busId = this.seatService.getBusData();

      this.http.put('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' + busId +'/seats/' + dta.seatName +'.json', data)
      .subscribe((res) =>{
        // console.log(dta.seatName + res+ 'success'+ busId);

        window.alert('Ticket booked successfully!');
          this.router.navigate(['/login']);
      },
      error => {
        // console.log(error);
        window.alert('Error: ' + error.message);
      }
      );
    }
  }



}