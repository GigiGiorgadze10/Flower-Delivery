// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { 
      id: 1,
      name: 'Snowfall',
      price: 70,
      description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
      imageUrl: 'assets/images/products/1b8bdb946fe19c52037df12f1626c436.png',
      combinations: [
        { name: 'Glass Vase', price: 15 },
        { name: 'Hammered Vase', price: 45 },
        { name: 'Ceramic Vase', price: 35 },
        { name: 'Steel Vase', price: 25 },
        { name: 'Bamboo', price: 35 },
      ],
    },
    { 
        id: 2,
        name: 'Dawn\'s Delight',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/7c6691d4afbd1a0cd1f2b5954982558e.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 3,
        name: 'Pink Elegance',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/9a7e57868fc2c6653cf8adf255e40385.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 4,
        name: 'Rustic Charm',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/211d295bca21b1784c81e8cb90f83cfc.jpg',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 5,
        name: 'Autumn Symphony',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/885c44f7b7c28d3c489ab944804c4731.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 6,
        name: 'Rosy Delight',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/817879fe9cd9044ea90923329d79add4.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 7,
        name: 'Serenity',
        price: 89,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/d34d19649da99e8ae1188d7c72ebba49.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 8,
        name: 'Blue Harmony',
        price: 55,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/dd210aaba2ec62222efbad5e3246eddb.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 9,
        name: 'Mystical Majesty',
        price: 80,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/e1f65f7a211f8e9c38c3b24befe2edab.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
      { 
        id: 10,
        name: 'Blazing Blossoms',
        price: 70,
        description: 'Large exceptional bouquet composed of a selection of David Austin roses...',
        imageUrl: 'assets/images/products/ecb194a680809095640a015ec87ec018.png',
        combinations: [
          { name: 'Glass Vase', price: 15 },
          { name: 'Hammered Vase', price: 45 },
          { name: 'Ceramic Vase', price: 35 },
          { name: 'Steel Vase', price: 25 },
          { name: 'Bamboo', price: 35 },
        ],
      },
    // More products here...
  ];

  // This method fetches the product by its ID
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
