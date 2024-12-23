import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isCategoryPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCategoryPage = this.router.url === '/category';
      }
    });
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
    // Toggle between Home and Category
    this.router.navigate([this.isCategoryPage ? '/' : '/category']);
  }
}
