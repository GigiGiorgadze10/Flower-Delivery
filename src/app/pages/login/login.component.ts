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
  isSignInMode = true;
  errorMessage: string = ''; 

  toggleForm(): void {
    this.isSignInMode = !this.isSignInMode; 
    this.errorMessage = ''; 
  }

  handleSignIn(email: string, password: string): void {
    this.errorMessage = '';

    if (!email || !password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      this.userService.setUser(user.name);
      alert('Sign-In Successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  handleSignUp(name: string, email: string, password: string, confirmPassword: string): void {
    this.errorMessage = ''; 

    if (!name || !email || !password || !confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (!this.isValidEmail(email)) {
      this.errorMessage = 'Invalid email format.';
      return;
    }

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find((u: any) => u.email === email)) {
      this.errorMessage = 'Email is already registered.';
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign-Up Successful! You can now Sign In.');
    this.isSignInMode = true; 
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}