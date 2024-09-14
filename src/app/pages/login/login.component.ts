import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = ''; // To store messages like account lock
  accoutnLock: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    // Clear previous messages
    this.message = '';

    this.http.post('/api/login', { username: this.username, password: this.password })
    .subscribe(
      (response: any) => {
        console.log('Login response:', response); // Log the response to check its structure
        if (response.success == 'true') {
          this.router.navigate(['/']);
        } else if (response.isLocked) {
          this.message = 'Your account is locked. Please contact support.';
          this.accoutnLock = true;
          this.router.navigate(['/login']);
        } else {
          this.message = response.message || 'Login failed. Please check your credentials.';
        }
      },
      (error) => {
        console.error('Login error:', error); // Log any error for debugging
        this.message = 'Login failed. Please check your credentials.';
      }
    );
  
  }
}
