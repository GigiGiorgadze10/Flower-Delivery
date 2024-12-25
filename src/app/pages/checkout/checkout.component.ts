import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  step: number = 1; // Current form step
  contactInfo = { name: '', email: '', phone: '' };
  shippingInfo = { address: '', city: '', zip: '' };
  paymentInfo = { cardNumber: '', expiry: '', cvv: '' };
  cartItems: any[] = []; // Items from the cart
  giftCard = '';
  discountApplied = false;
  discountedTotal = 0;
  serviceId = 'service_2nxae4y';
  templateId = 'template_c6bygpb';
  publicKey = 'shm7w_v2E8Gnc2qQs';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart Items:', this.cartItems); // Debugging line
    
  }

  deleteItem(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update the cartItems array
  }  

  proceedToNextStep() {
    if (this.step === 1) {
      if (!this.contactInfo.name || !this.contactInfo.email || !this.contactInfo.phone) {
        alert('Please fill out all contact details.');
        return;
      }
    } else if (this.step === 2) {
      if (!this.shippingInfo.address || !this.shippingInfo.city || !this.shippingInfo.zip) {
        alert('Please fill out all shipping details.');
        return;
      }
    } else if (this.step === 3) {
      if (!this.paymentInfo.cardNumber || !this.paymentInfo.expiry || !this.paymentInfo.cvv) {
        alert('Please fill out all payment details.');
        return;
      }
    }
  
    if (this.step < 3) {
      this.step++;
    }
  }

  handlePayment() {
    // Validate payment details
    if (!this.paymentInfo.cardNumber || !this.paymentInfo.expiry || !this.paymentInfo.cvv) {
      alert('Please fill out all payment details.');
      return;
    }
  
    // Simulate a successful payment
    alert('Payment successful! Thank you for your order.');
  
    // Clear cart and show a thank you message
    this.cartService.clearCart();
    this.sendReceiptEmail();
  
    // Go back to the first step or show a success page
    this.step = 1; // Or redirect to a "Thank You" page
  }

  sendReceiptEmail() {
    const templateParams = {
      name: this.contactInfo.name,
      email: this.contactInfo.email,
      items: this.cartItems.map(item => `${item.product.name} x${item.quantity}`).join(', '),
      total: this.getTotalPrice().toFixed(2),
    };
  
    emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
      .then(response => {
        console.log('Receipt sent:', response);
        alert('A receipt has been sent to your email.');
      })
      .catch(error => {
        console.error('Failed to send receipt:', error);
        alert('Failed to send receipt. Please try again.');
      });
  }
  
  
  

  applyGiftCard() {
    if (this.giftCard === 'DISCOUNT20' && !this.discountApplied) {
      this.discountApplied = true;
      this.discountedTotal = this.getSubtotal() * 0.8;
      alert('Gift card applied! You saved 20%!');
    } else if (this.discountApplied) {
      alert('Gift card already applied.');
    } else {
      alert('Invalid gift card.');
    }
  }

  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  getTotalPrice() {
    return this.discountApplied ? this.discountedTotal : this.getSubtotal();
  }
}
