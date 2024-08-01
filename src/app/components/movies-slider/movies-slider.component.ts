import { Component, Input } from '@angular/core';
import { Movie } from '../models/MovieModel';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss']
})
export class MoviesSliderComponent {
  @Input() movies!: Movie[] ;
  @Input() title!: string;

}
