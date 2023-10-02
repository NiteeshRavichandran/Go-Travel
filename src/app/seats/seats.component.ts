import { Component } from '@angular/core';
import { SeatService } from '../seat.service';
import { BookingService } from '../booking.service';

export interface Seat {
  name: string;
  seatStatus: 'Available' | 'selected' | 'booked' | 'ladies';
  passengerName?: string;
  passengerAge?: number;
  passengerGender?: string;
}


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})


  
export class SeatsComponent {

  constructor(private seatService: SeatService, private bookingService: BookingService) {} 

  lowerSingleSeats: any[] = []; 
  singleUpperBerthSeats: any[] = []; 
  doubleLowerBerthSeats: any[] = []; 
  doubleUpperBerthSeats: any[] = []; 

  
  
  ngOnInit(): void {
    const seatData = this.seatService.getSeatData(); 
    console.log(seatData);

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

    console.log(this.lowerSingleSeats); // Array of lower single seats
    console.log(this.singleUpperBerthSeats); // Array of single upper berth seats
    console.log(this.doubleLowerBerthSeats); // Array of double lower berth seats
    console.log(this.doubleUpperBerthSeats);

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
      } else if (seat.seatStatus !== 'selected') {
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
    }
    
  }

  
  
  // toggleSeatStatus(seat: Seat) {
  //   if (seat.seatStatus === 'Available' && this.selectedSeats.length < 5 ) {
  //     seat.seatStatus = 'selected';
  //     this.selectedSeats.push(seat);
  //   } else if (seat.seatStatus === 'selected') {
  //     seat.seatStatus = 'Available';
  //     const index = this.selectedSeats.findIndex((s) => s.name === seat.name);
  //     if (index !== -1) {
  //       this.selectedSeats.splice(index, 1);
  //     }
  //   }
  // }

  /*
  lowerSingleSeats = this.generateSeats(12, 'available');
  singleUpperBerthSeats = this.generateSUBerth(6, 'available');
  doubleLowerBerthSeats = this.generateDUBerth(6, 'available');
  doubleUpperBerthSeats = this.generateDLBerth(6, 'available');

  // Function to generate seat objects
  private generateSeats(count: number, status: string): any[] {
    const seats = [];
    for (let i = 1; i <= count; i++) {
      seats.push({ name: `LS${i}`, status: status });
    }
    return seats;
  }
  
  private generateSUBerth(count: number, status: string): any[] {
    const SUberth = [];
    for (let i = 1; i <= count; i++) {
      SUberth.push({ name: `SUB${i}`, status: status });
    }
    return SUberth;
  }
  private generateDUBerth(count: number, status: string): any[] {
    const DUberth = [];
    for (let i = 1; i <= count; i++) {
      DUberth.push({ name: `DUB${i}`, status: status });
    }
    return DUberth;
  }
  private generateDLBerth(count: number, status: string): any[] {
    const DLberth = [];
    for (let i = 1; i <= count; i++) {
      DLberth.push({ name: `DLB${i}`, status: status });
    }
    return DLberth;
  }

  // Function to toggle seat status
  toggleSeatStatus(seat: any) {
    if (seat.status === 'available' || seat.status === 'selected') {
      seat.status = 'booked';
    } else if (seat.status !== 'booked') {
      seat.status = 'selected';
    }
  }

}




*/