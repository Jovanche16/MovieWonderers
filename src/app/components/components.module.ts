import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from '../services/auth-guard.service';
import { WatchListComponent } from './watch-list/watch-list.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AuthComponent,
    MovieCardComponent,
    MoviesSliderComponent,
    FooterComponent,
    WatchListComponent,
    WatchMovieComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    YouTubePlayerModule
  ],
  providers: [AuthGuardService],
})
export class ComponentsModule { }
