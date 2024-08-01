import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public darkModeService: DarkModeService, 
    public authService: AuthService,
    public router:Router) {}

  isLoggedIn: boolean = false;
  logout() {
    this.authService.logout();
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
