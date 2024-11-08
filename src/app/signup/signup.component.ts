import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [ FormsModule],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  termsAccepted: boolean = false;

  constructor(private router: Router) {}

  onSignup() {
    if (!this.termsAccepted) {
      alert('Please accept the Terms & Conditions.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Simulating user data storage
    const user = {
      email: this.email,
      password: this.password
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }
}
