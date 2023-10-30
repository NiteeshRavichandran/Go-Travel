import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { AdminLoginComponent } from './modules/login/admin-login/admin-login.component';
import { LoginComponent } from './modules/login/login/login.component';
import { SignUpComponent } from './modules/login/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuardService],
    data: { roles: ['admin'] },
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuardService],
    data: { roles: ['user'] },
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
