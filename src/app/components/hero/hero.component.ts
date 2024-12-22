import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private sharedDataService: SharedDataService) {}

  onSelectImage(image: string) {
    this.sharedDataService.setSelectedImage(image);  // Emit the selected image
  }
}
