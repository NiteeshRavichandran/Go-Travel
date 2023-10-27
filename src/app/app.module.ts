import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat'
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './modules/user/user.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginModule } from './modules/login/login.module';

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
    AdminComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    LoginModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


