import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoComponent } from '../../components/info/info.component';
import { ServicesComponent } from '../../components/ourservices/services.component';
import { ReviewsSliderComponent } from '../../components/reviews-slider/reviews-slider.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, InfoComponent, ServicesComponent, ReviewsSliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
