import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'


interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'  
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(email: string, password: string){
    return this.http.post <AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADtZEc4w86x68BlWNOnucEwg1HbBO0Ego',
      {
        email: email, 
        password: password,
        returnSecureToken: true
      }
    );
  }

  signUp(email: string, password: string){
    return this.http.post <AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADtZEc4w86x68BlWNOnucEwg1HbBO0Ego',
      {
        email: email, 
        password: password,
        returnSecureToken: true
      }
    );
  }

  
  

}
