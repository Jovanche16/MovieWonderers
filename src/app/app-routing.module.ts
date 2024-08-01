import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { WatchMovieComponent } from './components/watch-movie/watch-movie.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path:'',component:HomeComponent, canActivate: [AuthGuardService]},
  {path:'login',component:AuthComponent},
  {path:'movies',component:MoviesComponent, canActivate: [AuthGuardService]},
   {path:'watch-list',component:WatchListComponent, canActivate: [AuthGuardService]},
  // {path:'series',component:SearchComponent},
   {path:'watch/:id',component:WatchMovieComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
