import { Component } from '@angular/core';
import { Movie } from '../models/MovieModel';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.scss']
})
export class WatchMovieComponent {

  movieDetails!: Movie ;
  movieId!: number;
  safeTrailerUrl!: any;
  showSpinner: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService,
    private _sanitizer: DomSanitizer
   ) {}
  
  ngOnInit(): void {
   
      const idParam = this.route.snapshot.paramMap.get('id');
      console.log(parseInt(idParam || ''))
      this.loadMovieData(parseInt(idParam || ''));
      this.safeTrailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://youtu.be/watch?=J6sIK2KnhH8");
  }

  loadMovieData(movieId: number): void {
    this.showSpinner = true;

    // Call your movie service to fetch movie data based on the ID
    this.moviesService.getMovieById(movieId).subscribe(movie => {
      // Handle the movie data
        this.movieDetails = movie.data;
        console.log(movie)
      // this.movie = movie;

      // Hide the loading spinner
      this.showSpinner = false;
    });
  }
  
}
