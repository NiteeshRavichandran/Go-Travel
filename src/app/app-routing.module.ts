import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SeatsComponent } from './seats/seats.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'admin', component: AdminComponent, children: [
    { path: 'addBus', component: AddBusComponent}
  ]},
  { path: 'user', component: UserComponent},
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'seats', component: SeatsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
