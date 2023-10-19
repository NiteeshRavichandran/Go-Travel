import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SeatsComponent } from './seats/seats.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { SummaryComponent } from './summary/summary.component';
import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusSeatComponent } from './bus-seat/bus-seat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'seat', component: BusSeatComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  { path: 'addBus', canActivate: [AuthGuardService], component: AddBusComponent},
  { path: 'user', canActivate: [AuthGuardService],component: UserComponent},
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'book', canActivate: [AuthGuardService],component: BookTicketsComponent},
  { path: 'seats', canActivate: [AuthGuardService],component: SeatsComponent},
  { path: 'summary', canActivate: [AuthGuardService],component: SummaryComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component:PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
