import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SeatsComponent } from './seats/seats.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat'
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SignUpComponent,
    SeatsComponent,
    AddBusComponent,
    AdminLoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDlA0pnKkl1DEhSkMsJEgaEgWbQjyz3wWw",
      authDomain: "go-travel-8b92f.firebaseapp.com",
      databaseURL: "https://go-travel-8b92f-default-rtdb.firebaseio.com",
      projectId: "go-travel-8b92f",
      storageBucket: "go-travel-8b92f.appspot.com",
      messagingSenderId: "950595159114",
      appId: "1:950595159114:web:a5b7f303d7d166947912b3",
      measurementId: "G-QLNTDZL5RN"
    }),
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
