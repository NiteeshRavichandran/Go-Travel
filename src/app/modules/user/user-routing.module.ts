import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent as UserHome } from './home/home.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { SummaryComponent } from './summary/summary.component';
import { SeatsComponent } from './seats/seats.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate:[AuthGuardService],
    children: [
      { path: 'home', component: UserHome },
      { path: 'book', component: BookTicketsComponent },
      { path: 'seats', component: SeatsComponent },
      { path: 'summary', component: SummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
