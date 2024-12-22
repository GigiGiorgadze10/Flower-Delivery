import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedImageSource = new BehaviorSubject<string>(''); // default to empty string
  selectedImage$ = this.selectedImageSource.asObservable();

  setSelectedImage(image: string) {
    this.selectedImageSource.next(image); // Update the shared selected image
  }
}
