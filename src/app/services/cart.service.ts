import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = this.getStoredCart(); 

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCartToStorage(); 
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToStorage();
    }
  }  

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartToStorage();
  }

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private getStoredCart() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
