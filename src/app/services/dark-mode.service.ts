import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateDarkModeClass(this.isDarkMode);
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkModeClass(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private updateDarkModeClass(isDarkMode: boolean) {
    document.body.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }

  isDarkModeEnabled(): boolean {
    return this.isDarkMode;
  }

}
