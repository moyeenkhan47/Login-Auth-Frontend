import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {
  username: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onUnlock() {
    // Clear any previous message
    this.message = '';

    // Send unlock request to backend
    this.http.post('/api/unlock', { username: this.username })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.message = 'Your account has been unlocked successfully!';
          } else {
            this.message = 'Unlock failed. Please check your username or contact support.';
          }
        },
        (error) => {
          this.message = 'An error occurred. Please try again later.';
        }
      );
  }
}
