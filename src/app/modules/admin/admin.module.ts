import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusSeatComponent } from './bus-seat/bus-seat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddBusComponent,
    BusSeatComponent,
    HomeComponent
  ],
  exports: [
    AddBusComponent,
    BusSeatComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }
