import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSliderComponent } from './reviews-slider.component';

describe('ReviewsSliderComponent', () => {
  let component: ReviewsSliderComponent;
  let fixture: ComponentFixture<ReviewsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
