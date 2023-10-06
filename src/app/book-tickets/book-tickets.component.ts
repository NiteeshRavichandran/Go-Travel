import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { SeatService } from '../seat.service';
import { Seat } from '../seats/seats.component';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss'],
})
export class BookTicketsComponent implements OnInit {
  selectedSeats: Seat[] = [];
  bookingForms: FormGroup[] = [];

  constructor(private bookingService: BookingService, private fb: FormBuilder, private http: HttpClient, private seatService: SeatService, private router: Router) {}

  ngOnInit(): void {
    // Get the selected seats data directly from the service
    this.selectedSeats = this.bookingService.getSelectedSeatsData();
    this.initializeForms();
  }

  initializeForms() {
    this.bookingForms = [];

    function nameValidator(control: AbstractControl): ValidationErrors | null {
      const name = control.value;
      if (!name || name.length < 3) {
        return { 'minLength': true };
      }
      if (!/^[a-zA-Z\s]*$/.test(name)) {
        return { 'invalidChars': true };
      }
      return null;
    }
    this.selectedSeats.forEach((seat) => {
      const form = this.fb.group({
        passengerName: [seat.passengerName || '', [Validators.required, nameValidator]],
        passengerAge: [seat.passengerAge || '', [Validators.required, Validators.min(5)]],
        passengerGender: [seat.passengerGender || '', Validators.required],
      });
      this.bookingForms.push(form);
    });
  }

  onSubmit() {
    if (this.bookingForms.every((form) => form.valid)) {
      const passengerDataArray = this.bookingForms.map((form, index) => ({
        seatName: this.selectedSeats[index].name,
        seatPrice: this.selectedSeats[index].seatPrice,
        passengerData: form.value,
      }));

      // Send passengerDataArray to the server or perform any other required actions
      // console.log(this.bookingForms);  
      this.bookingService.confirmSeats(passengerDataArray);
      this.router.navigate(['/summary'])

    }
  }
}
