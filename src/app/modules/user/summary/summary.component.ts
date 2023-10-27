import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookingService } from 'src/app/services/booking.service';
import { SeatService } from 'src/app/services/seat.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  constructor(private authService: AuthService,private cd: ChangeDetectorRef,private router: Router, private http: HttpClient, private bookingService: BookingService, private seatService: SeatService) { }

  passengerDataArray = this.bookingService.getconfirmSeats();
  adjSeats = this.bookingService.getAdjSeats();
  adjSeatStatus:any[] = [];
  totalSeatPrice: number;
  gender: any[] = this.bookingService.getGender();
  
  
  ngOnInit(){
    // console.log(this.passengerDataArray + 'pass');
    this.totalSeatPrice = this.passengerDataArray.reduce((total, data) => total + data.seatPrice, 0);
    // console.log(this.femaleSeats);
  }

  logout(){
    this.authService.logout();
  }
  onSubmit(){

    this.gender = this.bookingService.getGender();
    // console.log(this.gender);
    
    for (const [index, dta] of this.passengerDataArray.entries()){
      
      this.cd.detectChanges();
      if (dta.passengerData.passengerGender === 'female'){
        this.adjSeatStatus.push('female');
      }
      if (dta.passengerData.passengerGender === 'male'){
        this.adjSeatStatus.push('male');
      }
      const data = {
        seatStatus: 'booked',
        seatPrice: dta.seatPrice,
        passengerDetails: {
          passengerName: dta.passengerData.passengerName,
          passengerAge: dta.passengerData.passengerAge,
          passengerGender: this.gender[index] || dta.passengerData.passengerGender,
        }
      }
      // console.log(this.gender[index]);

      const busId = this.seatService.getBusData();

      this.http.put('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' + busId +'/seats/' + dta.seatName +'.json', data)
      .subscribe((res) =>{
        // console.log(dta.seatName + res+ 'success'+ busId);

        window.alert('Ticket booked successfully!');
          this.router.navigate(['/user/home']);
      },
      error => {
        // console.log(error);
        window.alert('Error: ' + error.message);
      }
      );
    }

    // console.log(this.adjSeatStatus);

    for (const [index, dta] of this.adjSeats.entries()){

      const male = {
        seatStatus: 'gents',
        seatPrice: dta.seatPrice,
        passengerDetails: {
         passengerName: '',
         passengerAge: '',
         passengerGender: '',
        },
      }
      const female = {
        seatStatus: 'ladies',
        seatPrice: dta.seatPrice,
        passengerDetails: {
         passengerName: '',
         passengerAge: '',
         passengerGender: '',
        },
      }

      const data = this.adjSeatStatus[index] === 'male' ? male : female;

      const busId = this.seatService.getBusData();

      this.http.put('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' + busId +'/seats/' + dta.name +'.json', data)
      .subscribe((res) =>{
        // console.log(dta.seatName + res+ 'success'+ busId) ;
      },
      error => {
        // console.log(error);
        window.alert('Error: ' + error.message);
      }
      );
    }


  }



}
