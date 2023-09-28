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

const firebaseConfig = {
  apiKey: "AIzaSyADtZEc4w86x68BlWNOnucEwg1HbBO0Ego",
  authDomain: "go-travel-42246.firebaseapp.com",
  databaseURL: "https://go-travel-42246-default-rtdb.firebaseio.com",
  projectId: "go-travel-42246",
  storageBucket: "go-travel-42246.appspot.com",
  messagingSenderId: "488003466377",
  appId: "1:488003466377:web:705b85b92442c068c58258",
  measurementId: "G-CEE4KNB9EP"
};
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


