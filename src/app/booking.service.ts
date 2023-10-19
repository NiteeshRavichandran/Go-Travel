import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Seat } from './seats/seats.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private selectedSeatsData: Seat[] = [];
  private adjacentSeatsData: any[] = [];
  private confirmseats: any[] = [];
  private gender ='';

  getSelectedSeatsData() {
    // console.log(this.selectedSeatsData);
    return this.selectedSeatsData;

  }

  bookSeats(selectedSeats: Seat[], adjacentSeats: Seat[]) {
    this.selectedSeatsData = selectedSeats;
    this.adjacentSeatsData = adjacentSeats;
    // console.log(this.selectedSeatsData);
  }

  setGender(gender: string){
    this.gender=gender;
  }

  getGender(){
    return this.gender;
  }

  getFemaleSeats(){
    return this.adjacentSeatsData;
  }

  confirmSeats(seat: any[]){
    this.confirmseats = seat;
  }

  getconfirmSeats(){
    return this.confirmseats;
  }


}
