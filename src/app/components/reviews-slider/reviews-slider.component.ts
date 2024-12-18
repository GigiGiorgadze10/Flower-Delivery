import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-reviews-slider',
  standalone: true,
  imports: [],
  templateUrl: './reviews-slider.component.html',
  styleUrl: './reviews-slider.component.css'
})
export class ReviewsSliderComponent implements OnInit {
  reviews: { author: string; message: string }[] = [];
  currentIndex = 0;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    // Load reviews dynamically from service
    this.reviews = this.reviewsService.getReviews();
  }

  prevReview(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  nextReview(): void {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  goToReview(index: number): void {
    this.currentIndex = index;
  }
}
