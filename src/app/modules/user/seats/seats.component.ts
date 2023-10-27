import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Seat } from 'src/app/models/seat.model';
import { BookingService } from 'src/app/services/booking.service';
import { SeatService } from 'src/app/services/seat.service';


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


  ngOnInit(): void {
    const seatData = this.seatService.getSeatData();
    // console.log(seatData);

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
    } else if (seat.seatStatus === 'gents' && this.selectedSeats.length < 5 ) {
      seat.seatStatus = 'gentsSelected';
      this.selectedSeats.push(seat);
    } else if (seat.seatStatus === 'gentsSelected' && this.selectedSeats.length < 5 ) {
      seat.seatStatus = 'gents';
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
        if (array[adjacentSeatIndex].seatStatus !== 'booked' && array[adjacentSeatIndex].seatStatus !== 'selected' ) {
          this.adjSeats.push(array[adjacentSeatIndex]);
        }
      }
    });
  }

  getSeatClass(seatStatus: string): { [key: string]: boolean } {
    return {
      booked: seatStatus === 'booked',
      Available: seatStatus === 'Available',
      selected: seatStatus === 'selected',
      ladies: seatStatus === 'ladies',
      ladiesSelected: seatStatus === 'ladiesSelected',
      gents: seatStatus === 'gents',
      gentsSelected: seatStatus === 'gentsSelected',
    };
  }
  

  bookSelectedSeats() {
    if (this.selectedSeats.length === 0) {
      return;
    }
    this.processSeats(this.doubleLowerBerthSeats);
    this.processSeats(this.doubleUpperBerthSeats);
    this.bookingService.bookSeats(this.selectedSeats, this.adjSeats);
    this.router.navigate(['/user/book']);
    // console.log(this.selectedSeats);
  }

}
