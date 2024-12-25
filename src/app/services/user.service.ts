import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<string | null>(localStorage.getItem('signedInUser'));

  user$ = this.userSubject.asObservable(); // Observable to subscribe to

  setUser(userName: string): void {
    localStorage.setItem('signedInUser', userName);
    this.userSubject.next(userName); // Update the user state
  }

  removeUser(): void {
    localStorage.removeItem('signedInUser');
    this.userSubject.next(null); // Clear the user state
  }
}
