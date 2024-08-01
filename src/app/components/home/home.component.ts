import { Component } from '@angular/core';
import { Movie } from '../models/MovieModel';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  latestMovies: Movie[] = [];
  latestSeries: Movie[] = [];
  count: number = 15; 
  showSpinner: boolean = false;
  movies: Movie[] = [];
  sliderTitle: string = '';

  constructor(private moviesService: MoviesService) { }
  
  ngOnInit(): void {
    
    this.fetchLatestMovies();

   }

  fetchLatestMovies(): void {
    this.showSpinner = true; 
    this.moviesService.getLatestMovies(this.count)
      .subscribe(
        res => {
          this.latestMovies = res.data;
          this.showSpinner = false; 
        },
        error => {
          console.error('Error fetching latest movies:', error);
          this.showSpinner = false; 
        }
      );
  }

}





    // Generate some sample movie data with image URLs from picsum.photos
  //   for (let i = 0; i < 10; i++) {
  //     const randomId = Math.floor(Math.random() * 1000);
  //     const imageUrl = `https://picsum.photos/200/300?random=${randomId}`;
  //     this.movies.push({
  //       title: `Movie ${i}`,
  //       genre: 'some',
  //       releaseYear: '2022',
  //       director: `Director ${i}`,
  //       description: `Description ${i}`,
  //       posterUrl: `https://picsum.photos/200/300?random=${randomId}`
  //     });
  //   }