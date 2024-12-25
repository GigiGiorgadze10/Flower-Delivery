import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}
  isSignInMode = true; // Determines whether to show sign-in or sign-up form
  errorMessage: string = ''; // Error message display

  toggleForm(): void {
    this.isSignInMode = !this.isSignInMode; // Toggle between Sign-In and Sign-Up
    this.errorMessage = ''; // Clear error message on toggle
  }

  handleSignIn(email: string, password: string): void {
    this.errorMessage = ''; // Clear previous errors

    // Validation: Check if fields are filled
    if (!email || !password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    // Check if user exists
    if (user) {
      this.userService.setUser(user.name);
      alert('Sign-In Successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  handleSignUp(name: string, email: string, password: string, confirmPassword: string): void {
    this.errorMessage = ''; // Clear previous errors

    // Validation: Check if fields are filled
    if (!name || !email || !password || !confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Validation: Check email format
    if (!this.isValidEmail(email)) {
      this.errorMessage = 'Invalid email format.';
      return;
    }

    // Validation: Check password match
    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.find((u: any) => u.email === email)) {
      this.errorMessage = 'Email is already registered.';
      return;
    }

    // Add new user and save to localStorage
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign-Up Successful! You can now Sign In.');
    this.isSignInMode = true; // Switch to sign-in form after successful sign-up
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}