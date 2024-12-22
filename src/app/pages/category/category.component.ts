import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SharedDataService } from '../../services/shared-data.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products: any[] = [];
  selectedImage: string = '';

  constructor(
    private productService: ProductService,
    private sharedDataService: SharedDataService 
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts(); // Fetch products from the service

    // Subscribe to the shared service to get the selected image
    this.sharedDataService.selectedImage$.subscribe((image) => {
      if (image) {
        this.selectedImage = image; // Update selected image
      }
    });
  }
}
