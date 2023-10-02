import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Seat } from '../seats/seats.component';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})

export class BookTicketsComponent implements OnInit {
  selectedSeats: Seat[] = [];
  bookingForm: FormGroup;

  constructor(private bookingService: BookingService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Subscribe to the selected seats observable
    this.bookingService.getSelectedSeatsObservable().subscribe((seats) => {
      this.selectedSeats = seats;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.bookingForm = this.fb.group({
      passengerName: ['', Validators.required],
      passengerAge: [0, [Validators.required, Validators.min(1)]],
      passengerGender: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission here, e.g., send passenger data to the server
    if (this.bookingForm.valid) {
      const passengerData = this.bookingForm.value;
      // Implement logic to send passengerData and selectedSeats to the server
      // or perform any other required actions.
    }
  }
}