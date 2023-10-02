import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Seat } from './seats/seats.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private selectedSeatsData: Seat[] = [];

  getSelectedSeatsData() {
    return this.selectedSeatsData;
  }

  bookSeats(selectedSeats: Seat[]) {
    // Here, you can implement the logic to book the seats and store passenger information.
    // You can also send the data to a server or save it in local storage, depending on your requirements.
    this.selectedSeatsData = selectedSeats;
    console.log(this.selectedSeatsData);
  }
}
