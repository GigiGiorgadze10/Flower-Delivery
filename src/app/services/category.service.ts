import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private products = [
    { id: 1, image: 'assets/images/products/1b8bdb946fe19c52037df12f1626c436.png', name: 'Snowfall', price: 70 },
    { id: 2, image: 'assets/images/products/7c6691d4afbd1a0cd1f2b5954982558e.png', name: 'Dawn\'s Delight', price: 70 },
    { id: 3, image: 'assets/images/products/9a7e57868fc2c6653cf8adf255e40385.png', name: 'Pink Elegance', price: 70 },
    { id: 4, image: 'assets/images/products/211d295bca21b1784c81e8cb90f83cfc.jpg', name: 'Rustic Charm', price: 70 },
    { id: 5, image: 'assets/images/products/885c44f7b7c28d3c489ab944804c4731.png', name: 'Autumn Symphony', price: 70 },
    { id: 6, image: 'assets/images/products/817879fe9cd9044ea90923329d79add4.png', name: 'Rosy Delight', price: 70 },
    { id: 7, image: 'assets/images/products/d34d19649da99e8ae1188d7c72ebba49.png', name: 'Serenity', price: 89 },
    { id: 8, image: 'assets/images/products/dd210aaba2ec62222efbad5e3246eddb.png', name: 'Blue Harmony', price: 55 },
    { id: 9, image: 'assets/images/products/e1f65f7a211f8e9c38c3b24befe2edab.png', name: 'Mystical Majesty', price: 80 },
    { id: 10, image: 'assets/images/products/ecb194a680809095640a015ec87ec018.png', name: 'Blazing Blossoms', price: 70 },
  ];

  getProducts() {
    return this.products;
  }
}
