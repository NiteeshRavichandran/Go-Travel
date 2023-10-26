import { Injectable } from '@angular/core';
import { Seat } from '../models/seat.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private selectedSeatsData: Seat[] = [];
  private adjacentSeatsData: any[] = [];
  private confirmseats: any[] = [];
  private gender =[];

  getSelectedSeatsData() {
    // console.log(this.selectedSeatsData);
    return this.selectedSeatsData;

  }

  bookSeats(selectedSeats: Seat[], adjacentSeats: Seat[]) {
    this.selectedSeatsData = selectedSeats;
    this.adjacentSeatsData = adjacentSeats;
    // console.log(this.selectedSeatsData);
  }

  setGender(gender: any[]){
    this.gender=gender;
  }

  getGender(){
    return this.gender;
  }

  getAdjSeats(){
    return this.adjacentSeatsData;
  }

  confirmSeats(seat: any[]){
    this.confirmseats = seat;
  }

  getconfirmSeats(){
    return this.confirmseats;
  }


}
