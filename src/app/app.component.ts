import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-auth';

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onUnlock() {
    this.router.navigate(['/unlock']);
  }

  onLogout() {
    // Implement logout logic here if necessary
    this.router.navigate(['/login']);
  }
}
