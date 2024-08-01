import { Component, Input } from '@angular/core';
import { Movie } from '../models/MovieModel';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie ;
  //movie: any;
  showInfo: boolean = false;

  constructor(
    private router: Router,
    private movieService: MoviesService
  ) {}

  playMovie() {
   
    this.router.navigate(['/watch/'+this.movie.id]);
  }

  addToWatchlist() {
    // 
  }

}
