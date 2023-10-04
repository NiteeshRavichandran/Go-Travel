import { Component } from '@angular/core';
import { SeatService } from '../seat.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Seat {
  name: string;
  seatStatus: 'Available' | 'selected' | 'booked' | 'ladies';
  passengerName?: string;
  passengerAge?: number;
  passengerGender?: string;
  seatPrice?: number;
}


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})


  
export class SeatsComponent {

  constructor(private seatService: SeatService, private bookingService: BookingService, private router: Router, private authService: AuthService, private http: HttpClient) {} 

  lowerSingleSeats: any[] = []; 
  singleUpperBerthSeats: any[] = []; 
  doubleLowerBerthSeats: any[] = []; 
  doubleUpperBerthSeats: any[] = []; 

  
  isAdmin:boolean;

  ngOnInit(): void {
    const seatData = this.seatService.getSeatData(); 
    // console.log(seatData);
    this.isAdmin = this.authService.isAdmin();
    console.log(this.isAdmin);

    for (const seatName in seatData) {
      if (seatData.hasOwnProperty(seatName)) {
        const seat = seatData[seatName];
  
        if (seatName.startsWith('LS')) {
          this.lowerSingleSeats.push({ name: seatName, ...seat });
        } else if (seatName.startsWith('SUB')) {
          this.singleUpperBerthSeats.push({ name: seatName, ...seat });
        } else if (seatName.startsWith('DLB')) {
          this.doubleLowerBerthSeats.push({ name: seatName, ...seat });
        } else if (seatName.startsWith('DUB')) {
          this.doubleUpperBerthSeats.push({ name: seatName, ...seat });
        }
      }
    }

    // Sort the arrays by seat name numerically
this.lowerSingleSeats.sort((a, b) => {
  const aNumber = parseInt(a.name.match(/\d+/)[0], 10);
  const bNumber = parseInt(b.name.match(/\d+/)[0], 10);
  return aNumber - bNumber;
});

this.singleUpperBerthSeats.sort((a, b) => {
  const aNumber = parseInt(a.name.match(/\d+/)[0], 10);
  const bNumber = parseInt(b.name.match(/\d+/)[0], 10);
  return aNumber - bNumber;
});

this.doubleLowerBerthSeats.sort((a, b) => {
  const aNumber = parseInt(a.name.match(/\d+/)[0], 10);
  const bNumber = parseInt(b.name.match(/\d+/)[0], 10);
  return aNumber - bNumber;
});

this.doubleUpperBerthSeats.sort((a, b) => {
  const aNumber = parseInt(a.name.match(/\d+/)[0], 10);
  const bNumber = parseInt(b.name.match(/\d+/)[0], 10);
  return aNumber - bNumber;
});

    setTimeout(() => {

    }, 800);  

    // console.log(this.lowerSingleSeats); 
    // console.log(this.singleUpperBerthSeats); 
    // console.log(this.doubleLowerBerthSeats); 
    // console.log(this.doubleUpperBerthSeats);

  }
    // const seatData = ti
    selectedSeats: Seat[] = [];
    passengerName: string = '';
    passengerAge: number = 0;
    passengerGender: string = '';
  
    
    toggleSeatStatus(seat: any) {
      if (seat.seatStatus === 'Available' && this.selectedSeats.length < 5) {
        seat.seatStatus = 'selected';
        this.selectedSeats.push(seat);
      } else if (seat.seatStatus === 'selected') {
        seat.seatStatus = 'Available';
        const index = this.selectedSeats.findIndex((s) => s.name === seat.name);
        if (index !== -1) {
          this.selectedSeats.splice(index, 1);
        }
      } 
    }

    
    getSeatClass(seat: Seat) {
      return {
        'booked': seat.seatStatus === 'booked',
        'available': seat.seatStatus === 'Available',
        'selected': seat.seatStatus === 'selected',
        'ladies': seat.seatStatus === 'ladies',
      };
    }

    bookSelectedSeats() {
      if (this.selectedSeats.length === 0) {
        return;
      }
      this.bookingService.bookSeats(this.selectedSeats);
      this.router.navigate(['/book']);
      console.log(this.selectedSeats);
    }

    cancelSeat(seatName:string, seatprice: number){

      const data = {
        seatStatus: 'Available',
        seatPrice: seatprice,
        passengerDetails: {
         passengerName: '',
         passengerAge: '',
         passengerGender: '',
        },
      }

      const busId = this.seatService.getBusData();

      this.http.put('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' + busId +'/seats/' + seatName +'.json', data)
      .subscribe((res) =>{
        // console.log(dta.seatName + res+ 'success'+ busId);

        window.alert('Ticket canceled successfully!');
      },
      error => {
        // console.log(error);
        window.alert('Error: ' + error.message);
      }
      );
    }
    
  }