import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {
  // busData: { busName: any; busNo: any; fromPlace: any; toPlace: any; boardingTime: any; reachingTime: any; seats: { LS1: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS2: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS3: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS4: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS5: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS6: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS7: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS8: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS9: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS10: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS11: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; LS12: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB1: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB2: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB3: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB4: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB5: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; SUB6: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB1: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB2: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB3: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB4: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB5: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DUB6: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB1: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB2: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB3: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB4: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB5: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; DLB6: { seatStatus: string; seatPrice: number; passengerDetails: { passengerName: string; passengerAge: string; passengerGender: string; }; }; }; };

  constructor(private router: Router, private http: HttpClient){}
  
  addBusForm: FormGroup;
  ngOnInit(){
    this.addBusForm = new FormGroup({
      busName: new FormControl(null, Validators.required),
      busNo: new FormControl(null, Validators.required),
      fromPlace: new FormControl(null, Validators.required),
      toPlace: new FormControl(null, Validators.required),
      boardingTime: new FormControl(null, Validators.required),
      reachingTime: new FormControl(null, Validators.required)
    });
  }

  newBus(id : string){
  const busData = {
  busName: this.addBusForm.value.busName,
  busNo: this.addBusForm.value.busNo,
  busId: id,
  fromPlace: this.addBusForm.value.fromPlace,
  toPlace: this.addBusForm.value.toPlace,
  boardingTime: this.addBusForm.value.boardingTime,
  reachingTime: this.addBusForm.value.reachingTime,
  seats: {
    LS1: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS2: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS3: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS4: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS5: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS6: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS7: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS8: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS9: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS10: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS11: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    LS12: {
      seatStatus: 'Available',
      seatPrice: 700,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB1: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB2: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB3: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB4: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB5: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    SUB6: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB1: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB2: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB3: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB4: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB5: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB6: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB7: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB8: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB9: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB10: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB11: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DUB12: {
      seatStatus: 'Available',
      seatPrice: 1100,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB1: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB2: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB3: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB4: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB5: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB6: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB7: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB8: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB9: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB10: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB11: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
    DLB12: {
      seatStatus: 'Available',
      seatPrice: 1200,
      passengerDetails: {
        passengerName: '',
        passengerAge: '',
        passengerGender: '',
      },
    },
  },
};
return busData;
  }


AddBus(){
const newbus ={}; 

if (this.addBusForm.valid){
  // console.log(busData);
  this.http.post('https://go-travel-42246-default-rtdb.firebaseio.com/busses.json', newbus).subscribe(
    (responseData: any) => {
    // console.log('bus added successfully' + responseData);
    // const busid = (JSON.stringify(responseData))name;
    // console.log(JSON.stringify(responseData));
    const busid = (responseData.name).substring(1);
    console.log(busid);
    const busdata = this.newBus(busid);

    this.http.put('https://go-travel-42246-default-rtdb.firebaseio.com/busses/-'+ busid +'.json', busdata).subscribe();

  }    
  );
  this.router.navigate(['/admin']);
}
}
}























/*

{
  "busName": "ABC travels",
  "busNo": "TN12AS3445",
  "fromPlace": "Chennai",
  "toPlace": "Coimbatore",
  "boardingTime": "21:00",
  "reachingTime": "05:00",
"seats": {
    "LS1": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS2": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS3": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS4": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS5": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS6": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS7": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS8": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS9": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS10": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS11": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "LS12": {
      "seatStatus": "Available",
      "seatPrice": 700,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB1": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB2": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB3": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB4": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB5": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "SUB6": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB1": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB2": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB3": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB4": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB5": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB6": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB7": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB8": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB9": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB10": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB11": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DUB12": {
      "seatStatus": "Available",
      "seatPrice": 1100,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB1": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB2": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB3": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB4": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB5": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB6": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB7": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB8": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB9": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB10": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB11": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    },
    "DLB12": {
      "seatStatus": "Available",
      "seatPrice": 1200,
      "passengerDetails": {
        "passengerName": "",
        "passengerAge": "",
        "passengerGender": ""
      }
    }
}
}


*/