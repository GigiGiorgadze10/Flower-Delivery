import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isCategoryPage: boolean = false;
  signedInUser: string | null = null; // Tracks the signed-in user

  constructor(private router: Router) {}

  ngOnInit() {
    // Detect current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCategoryPage = this.router.url === '/category';
      }
    });

    // Load signed-in user data from localStorage
    this.signedInUser = localStorage.getItem('signedInUser');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigate() {
    this.router.navigate([this.isCategoryPage ? '/' : '/category']);
  }

  signOut() {
    // Clear user data and navigate to the sign-in page
    localStorage.removeItem('signedInUser');
    this.signedInUser = null;
    this.router.navigate(['/signin']);
  }
}
