import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoComponent } from '../../components/info/info.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, InfoComponent, ServicesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
