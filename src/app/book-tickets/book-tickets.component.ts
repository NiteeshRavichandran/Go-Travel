import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    // Clear existing forms
    this.bookingForms = [];

    // Create a form for each selected seat
    this.selectedSeats.forEach((seat) => {
      const form = this.fb.group({
        passengerName: [seat.passengerName || '', Validators.required],
        passengerAge: [seat.passengerAge || 0, [Validators.required, Validators.min(1)]],
        passengerGender: [seat.passengerGender || '', Validators.required],
      });
      this.bookingForms.push(form);
  
    });
  }

  onSubmit() {
    // Handle form submission here, e.g., send passenger data to the server
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
