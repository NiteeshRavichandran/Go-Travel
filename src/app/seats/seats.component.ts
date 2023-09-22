import { Component } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
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
