import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = this.getStoredCart(); // Load initial data from localStorage

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCartToStorage(); // Save to localStorage
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartToStorage(); // Clear localStorage
  }

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private getStoredCart() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
