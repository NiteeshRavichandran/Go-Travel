import { Component } from '@angular/core';
import { SeatService } from '../seat.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

export interface Seat {
  name: string;
  seatStatus: 'Available' | 'selected' | 'booked' | 'ladies' | 'ladiesSelected';
  passengerName?: string;
  passengerAge?: number;
  passengerGender?: string;
  seatPrice?: number;
}

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css'],
})
export class SeatsComponent {
  constructor(
    private seatService: SeatService,
    private bookingService: BookingService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {
    setTimeout(() => {
    this.allSeats = this.allSeats.concat(
      this.singleUpperBerthSeats,
      this.doubleLowerBerthSeats,
      this.doubleUpperBerthSeats,
      this.lowerSingleSeats
    );
    this.allSeats2 = this.allSeats2.concat(
      this.doubleLowerBerthSeats,
      this.doubleUpperBerthSeats
    );
  }, 500);
  }

  lowerSingleSeats: any[] = [];
  singleUpperBerthSeats: any[] = [];
  doubleLowerBerthSeats: any[] = [];
  doubleUpperBerthSeats: any[] = [];
  allSeats: any[] = [];
  allSeats2: any[] = [];

  isAdmin: boolean;

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

    setTimeout(() => {}, 300);

    // console.log(this.lowerSingleSeats);
    // console.log(this.singleUpperBerthSeats);
    // console.log(this.doubleLowerBerthSeats);
    // console.log(this.doubleUpperBerthSeats);
  }
  // const seatData = ti
  selectedSeats: Seat[] = [];
  adjSeats: Seat[] = [];
  passengerName: string = '';
  passengerAge: number = 0;
  passengerGender: string = '';

  logout(){
    this.authService.logout();
  }

  toggleSeatStatus(seat: any) {
    if (this.isAdmin){
      return;
    }
    if (seat.seatStatus === 'Available' && this.selectedSeats.length < 5 ) {
      seat.seatStatus = 'selected';
      this.selectedSeats.push(seat);
    } else if (seat.seatStatus === 'ladies' && this.selectedSeats.length < 5 ) {
      seat.seatStatus = 'ladiesSelected';
      this.selectedSeats.push(seat);
    } else if (seat.seatStatus === 'ladiesSelected' && this.selectedSeats.length < 5 ) {
      seat.seatStatus = 'ladies';
      const index = this.selectedSeats.findIndex((s) => s.name === seat.name);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    } else if (seat.seatStatus === 'selected') {
      seat.seatStatus = 'Available';
      const index = this.selectedSeats.findIndex((s) => s.name === seat.name);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    }
  }


  processSeats(seatsArray: any[]) {
    seatsArray.forEach((seat, index, array) => {
      if (seat.seatStatus === 'selected') {
        const adjacentSeatIndex = index + 1 <= 6 ? index + 6 : index - 6;
        if (array[adjacentSeatIndex].seatStatus !== 'booked') {
          this.adjSeats.push(array[adjacentSeatIndex]);
        }
      }
    });
  }

  getSeatClass(seat: Seat) {
    return {
      booked: seat.seatStatus === 'booked',
      available: seat.seatStatus === 'Available',
      selected: seat.seatStatus === 'selected',
      ladies: seat.seatStatus === 'ladies',
    };
  }

  bookSelectedSeats() {
    if (this.selectedSeats.length === 0) {
      return;
    }
    this.processSeats(this.doubleLowerBerthSeats);
    this.processSeats(this.doubleUpperBerthSeats);
    this.bookingService.bookSeats(this.selectedSeats, this.adjSeats);
    this.router.navigate(['/book']);
    // console.log(this.selectedSeats);
  }

  adjacent(seatname: string){

    this.allSeats2.forEach((seat, index, array) => {
      if (seat.name === seatname) {
        const adjacentSeatIndex = ((index%12) + 1 <= 6 ? index + 6 : index - 6);
        if (array[adjacentSeatIndex].seatStatus === 'ladies') {
          const data = {
            seatStatus: 'Available',
            seatPrice: array[adjacentSeatIndex].seatPrice,
            passengerDetails: {
              passengerName: '',
              passengerAge: '',
              passengerGender: '',
            },
          };
          
          const busId = this.seatService.getBusData();
          this.http
            .put(
              'https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' +
                busId +
                '/seats/' +
                array[adjacentSeatIndex].name +
                '.json',
              data
            ).subscribe();
        }
      }
    });

  }


  cancelSeat(seatName: string, seatprice: number) {
    const data = {
      seatStatus: 'Available',
      seatPrice: seatprice,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    };

    const busId = this.seatService.getBusData();

    this.http
      .put(
        'https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' +
          busId +
          '/seats/' +
          seatName +
          '.json',
        data
      )
      .subscribe(
        (res) => {
          // console.log(dta.seatName + res+ 'success'+ busId);
          this.adjacent(seatName);
          window.alert('Ticket canceled successfully!');
        },
        (error) => {
          // console.log(error);
          window.alert('Error: ' + error.message);
        }
      );

  }
}
