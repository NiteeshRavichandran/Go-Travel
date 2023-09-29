import { Component } from '@angular/core';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
  
export class SeatsComponent {

  constructor(private seatService: SeatService) {} // Inject the service

  lowerSingleSeats: any[] = []; // Initialize with an empty array or default value
  singleUpperBerthSeats: any[] = []; // Initialize with an empty array or default value
  doubleLowerBerthSeats: any[] = []; // Initialize with an empty array or default value
  doubleUpperBerthSeats: any[] = []; // Initialize with an empty array or default value

  
  
  ngOnInit(): void {
    const seatData = this.seatService.getSeatData(); // Get the seat data from the service
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
    
  toggleSeatStatus(seat: any) {
    if (seat.seatStatus === 'available' || seat.seatStatus === 'selected') {
      seat.seatStatus = 'selected';
    } else if (seat.seatStatus !== 'booked') {
      seat.seatStatus = 'selected';
    }
  }
}



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