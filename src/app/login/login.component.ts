import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  termsAccepted: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Check if terms are accepted
    if (!this.termsAccepted) {
      alert('Please accept the Terms & Conditions.');
      return;
    }

    // Simulating a stored user in localStorage (for the sake of this example)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === this.email && user.password === this.password) {
        // Set login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        
        // Redirect to posts page
        this.router.navigate(['/posts']);
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No user found. Please sign up first.');
    }
  }
}
