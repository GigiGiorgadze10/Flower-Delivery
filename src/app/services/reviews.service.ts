import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private reviews = [
    {
      author: 'Ronald Richards',
      message:
        'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!',
    },
    {
      author: 'Anna Williams',
      message:
        'Absolutely beautiful arrangement! The flowers were fresh and delivered on time.',
    },
    {
      author: 'John Doe',
      message:
        'Fantastic service and stunning flowers. My wife loved the surprise!',
    },
  ];

  getReviews() {
    return this.reviews;
  }
}
