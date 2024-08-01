import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CustomResponse } from '../components/models/CustomResponseModel';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private apiUrl = 'https://localhost:7240/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.getToken()}`
  });

  constructor(private http: HttpClient) { }

  getWatchlist(): Observable<CustomResponse<any>> {
  
    return this.http.get<CustomResponse<any>>(`${this.apiUrl}/watchlist`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  removeFromWatchlist(movieId: number): Observable<CustomResponse<any>> {
   
    return this.http.delete<CustomResponse<string>>(`${this.apiUrl}/watchlist?movieId=${movieId}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  addToWatchlist()
  {
    //need to fill this in
  }
  private getToken(): string | null {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      const tokenObj = JSON.parse(token);
      return tokenObj.token;
    }
    return null;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    debugger
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error);
    } else {
      // Server-side error
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
