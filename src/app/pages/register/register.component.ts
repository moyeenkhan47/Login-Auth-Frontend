import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = ''; // To display registration messages

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    // Clear previous messages
    this.message = '';

    // Simple validation to check if passwords match
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match.';
      return;
    }

    // Make the HTTP POST request to your backend API for registration
    this.http.post('/api/register', { username: this.username, password: this.password,confirmPassword: this.confirmPassword })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.message = 'Registration successful. You can now log in.';
            this.router.navigate(['/login']); // Optionally, redirect to login page
          } else {
            // Handle different error scenarios returned by backend
            this.message = response.message || 'Registration failed. Please try again.';
          }
        },
        (error) => {
          // Show a generic error message if registration fails
          this.message = 'Username Already exist!. Please check your inputs and try again.';
        }
      );
  }
}
