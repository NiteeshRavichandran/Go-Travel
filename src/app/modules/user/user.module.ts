import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { SeatsComponent } from './seats/seats.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookTicketsComponent,
    SeatsComponent,
    SummaryComponent,
    HomeComponent
  ],
  exports: [
    BookTicketsComponent,
    SeatsComponent,
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
