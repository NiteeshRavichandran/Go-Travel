import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../user/home/home.component";
import { AddBusComponent } from "./add-bus/add-bus.component";
import { AdminComponent } from "./admin.component";
import { BusSeatComponent } from "./bus-seat/bus-seat.component";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'addBus', component: AddBusComponent },
      { path: 'cancelTickets', component: BusSeatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
