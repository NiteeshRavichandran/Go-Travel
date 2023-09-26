import { Component } from '@angular/core';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {

  constructor(){}


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
    }
}
}


*/