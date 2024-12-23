import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;

  scrollToContact() {
    if (this.contactSection) {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
