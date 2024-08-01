import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../components/models/MovieModel';
import { CustomResponse } from '../components/models/CustomResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://localhost:7240/api/Movies'; // Corrected typo
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.getToken()}`
  });
  constructor(private http: HttpClient) { }

  // Method to fetch the latest movies
  getLatestMovies(count: number): Observable<CustomResponse<any>> {
    return this.http.get<CustomResponse<any[]>>(`${this.apiUrl}/latest-movies?count=${count}`, { headers: this.headers });
  }

  // Method to fetch the latest series
  getLatestSeries(count: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/latest-series?count=${count}`, { headers: this.headers });
  }

  // Method to get movie by ID
  getMovieById(movieId: number): Observable<CustomResponse<any>> {
    return this.http.get<CustomResponse<any>>(`${this.apiUrl}/id?movieId=${movieId}`, { headers: this.headers });
  }

  // Method to retrieve headers with token
  private getToken(): string | null {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      const tokenObj = JSON.parse(token);
      return tokenObj.token;
    }
    return null;
  }

  // Method to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
