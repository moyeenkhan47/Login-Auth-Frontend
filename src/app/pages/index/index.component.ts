import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }

  // Method to handle register button click
  onRegister() {
    this.router.navigate(['/register']);
  }

  // Method to handle unlock button click
  onUnlock() {
    this.router.navigate(['/unlock']);
  }

  // Method to handle logout button click
  onLogout() {
    // Implement your logout logic here, for example clearing user session
    // Redirect to a specific page after logout, like login page
    this.router.navigate(['/login']);
  }
}
