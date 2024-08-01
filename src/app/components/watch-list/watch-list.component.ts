import { Component } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';
import { CustomResponse } from '../models/CustomResponseModel';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent {

  wachlist: any[] = [];
  showSpinner: boolean = false;

  constructor(private watchlistService: WatchListService) { }

  ngOnInit(): void {
    this.fetchWatchlist();
  }

  fetchWatchlist(): void {
  this.showSpinner = true;
  this.watchlistService.getWatchlist()
    .subscribe(
      (response: CustomResponse<any>) => {
        this.wachlist = response.data; // Assign the data property of the response
        console.log(response.data)
        this.showSpinner = false;
      },
      error => {
        console.error('Error fetching watchlist:', error);
        this.showSpinner = false;
      }
    );
}

  removeFromWatchlist(movieId: number): void {
    this.watchlistService.removeFromWatchlist(movieId)
      .subscribe(
        (response: CustomResponse<any>) => { // Specify the response type as CustomResponse<any>
          // Check if the operation was successful
          if (response.success) {
            // Refresh watchlist after removing the movie
            this.fetchWatchlist();
          } else {
            console.error('Error removing movie from watchlist:', response.errors);
          }
        },
        error => {
          console.error('Error removing movie from watchlist:', error);
        }
      );
  }
}
