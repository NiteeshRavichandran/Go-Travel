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
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlA0pnKkl1DEhSkMsJEgaEgWbQjyz3wWw',
      {
        email: email, 
        password: password,
        returnSecureToken: true
      }
    );
  }

}
