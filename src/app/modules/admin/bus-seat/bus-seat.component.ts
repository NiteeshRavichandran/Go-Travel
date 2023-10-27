import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SeatService } from 'src/app/services/seat.service';

@Component({
  selector: 'app-bus-seat',
  templateUrl: './bus-seat.component.html',
  styleUrls: ['./bus-seat.component.css']
})
export class BusSeatComponent {
  constructor(
    private seatService: SeatService,
    private authService: AuthService,
    private http: HttpClient,
    private cd: ChangeDetectorRef
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
  }, 400);
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

  logout(){
    this.authService.logout();
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

  adjacent(seatname: string, seatprice: number){

    const seatData = {
      name: seatname,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
      seatPrice: seatprice,
      seatStatus: 'Available',  
    };

    this.allSeats2.forEach((seat, index, array) => {
      if (seat.name === seatname) {
        const adjacentSeatIndex = ((index%12) + 1 <= 6 ? index + 6 : index - 6);
        if (
          (array[adjacentSeatIndex].seatStatus === 'ladies' ||
           array[adjacentSeatIndex].seatStatus === 'gents') &&
          array[adjacentSeatIndex].seatStatus !== 'Available'
        ) {
          const data = {
            seatStatus: 'Available',
            seatPrice: array[adjacentSeatIndex].seatPrice,
            passengerDetails: {
              passengerName: '',
              passengerAge: '',
              passengerGender: '',
            },
          };
          
          const busId = this.seatService.getBusData();
          this.http
            .put(
              'https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' +
                busId +
                '/seats/' +
                array[adjacentSeatIndex].name +
                '.json',
              data
            ).subscribe(
              ()=>{
                if(seatname.startsWith('DUB')){
                  this.doubleUpperBerthSeats.forEach((seat, index, array) => {
                    if(seat.name === seatname){
                      array[index] = seatData;
                    }
                  });
                }
                if(seatname.startsWith('DLB')){
                  this.doubleLowerBerthSeats.forEach((seat, index, array) => {
                    if(seat.name === seatname){
                      array[index] = seatData;
                    }
                  });
                }
                this.cd.detectChanges();
                this.reload();
              }
            );
        }
      }
    });
  }

  reload(){
    this.allSeats = [];
    this.allSeats = this.allSeats.concat(
      this.singleUpperBerthSeats,
      this.doubleLowerBerthSeats,
      this.doubleUpperBerthSeats,
      this.lowerSingleSeats
    );
  }

  cancelSeat(seatName: string, seatprice: number) {
    const data = {
      seatStatus: 'Available',
      seatPrice: seatprice,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    };

    const seatData = {
      name: seatName,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
      seatPrice: seatprice,
      seatStatus: 'Available',  
    };

    const busId = this.seatService.getBusData();

    this.http
      .put(
        'https://go-travel-42246-default-rtdb.firebaseio.com/busses/-' +
          busId +
          '/seats/' +
          seatName +
          '.json',
        data
      )
      .subscribe(
        (res) => {
          // console.log(dta.seatName + res+ 'success'+ busId);
          this.adjacent(seatName, seatprice);
          if(seatName.startsWith('DUB')){
            this.doubleUpperBerthSeats.forEach((seat, index, array) => {
              if(seat.name === seatName){
                array[index] = seatData;
              }
            });
          }
          if(seatName.startsWith('DLB')){
            this.doubleLowerBerthSeats.forEach((seat, index, array) => {
              if(seat.name === seatName){
                array[index] = seatData;
              }
            });
          }
          if(seatName.startsWith('LS')){
            this.lowerSingleSeats.forEach((seat, index, array) => {
              if(seat.name === seatName){
                array[index] = seatData;
              }
            });
          }
          if(seatName.startsWith('SUB')){
            this.singleUpperBerthSeats.forEach((seat, index, array) => {
              if(seat.name === seatName){
                array[index] = seatData;
              }
            });
          }
          this.cd.detectChanges();
          this.reload();
          window.alert('Ticket canceled successfully!');
        },
        (error) => {
          // console.log(error);
          window.alert('Error: ' + error.message);
        }
      );

  }

}
