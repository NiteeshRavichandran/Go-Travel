import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "src/app/auth/auth-guard.service";
import { HomeComponent as AdminHome } from "./home/home.component";
import { AddBusComponent } from "./add-bus/add-bus.component";
import { AdminComponent } from "./admin.component";
import { BusSeatComponent } from "./bus-seat/bus-seat.component";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate:[AuthGuardService],
    children: [
      { path: 'home', component: AdminHome },
      { path: 'addBus', component: AddBusComponent },
      { path: 'cancel', component: BusSeatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
