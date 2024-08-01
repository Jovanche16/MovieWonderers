import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInRequest } from '../components/models/login';
import { SignUpRequest } from '../components/models/signup';
import { Token } from '../components/models/TokenModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://localhost:7240"
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}
    
  login(loginRequest: LogInRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/login`, loginRequest);
  }

  signUp(signupRequest: SignUpRequest): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/auth/register`, signupRequest);
  }
  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {

    // Check if token exists in local storage
    const tokenString = localStorage.getItem('token');
   
    // Check if token exists
    if (!tokenString) {
      return false; // No token found, user is not logged in
    }
    // Parse token JSON string into object
    const token = JSON.parse(tokenString);

    // Get expiration date from token
    const expirationDate = new Date(token.expires);

    // Check if token is expired
    return expirationDate > new Date();
  }
}
