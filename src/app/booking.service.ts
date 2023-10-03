import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Seat } from './seats/seats.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private selectedSeatsData: Seat[] = [];
  private confirmseats: any[] = [];

  getSelectedSeatsData() {
    // console.log(this.selectedSeatsData);
    return this.selectedSeatsData;

  }

  bookSeats(selectedSeats: Seat[]) {
    this.selectedSeatsData = selectedSeats;
    // console.log(this.selectedSeatsData);
  }

  confirmSeats(seat: any[]){
    this.confirmseats = seat;
  }

  getconfirmSeats(){
    return this.confirmseats;
  }


}
