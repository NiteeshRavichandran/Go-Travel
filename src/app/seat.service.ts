import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient) { }
  private seatData: any = {};

  setSeatData(data: string) {
    this.http.get('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-'+data+'/seats.json').subscribe(seats => {
      this.seatData = seats;
    });

  }

  getSeatData() {
    return this.seatData;
  }
}
