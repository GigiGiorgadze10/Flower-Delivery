import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'; // Import EmailJS

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any;
  quantity: number = 1; // Default quantity
  selectedVase: any = null; // Selected vase option
  priceOption: string = 'oneTime'; // Default price option
  totalPrice: number = 0; // Total price (computed)
  email: string = ''; // Email input field
  isSubscriptionModalOpen: boolean = false; // Modal visibility flag

  serviceId: string = 'service_xvlwaog'; // Replace with your EmailJS Service ID
  templateId: string = 'template_ns87j15'; // Replace with your EmailJS Template ID
  publicKey: string = 'TtSx7sWPRO9tT1hfx'; // Replace with your EmailJS Public Key

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const id = parseInt(productId, 10);
      this.product = this.productService.getProductById(id);
      this.updateTotalPrice(); // Initialize total price
    }
  }

  // Method to increase quantity
  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  // Method to decrease quantity
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  // Method to update total price
  updateTotalPrice() {
    let basePrice = this.product.price * this.quantity;
    let vasePrice = this.selectedVase ? this.selectedVase.price : 0;

    // Apply discount for subscription
    if (this.priceOption === 'subscribe') {
      basePrice *= 0.75; // Apply 25% discount for subscription
    }

    // Calculate total price
    this.totalPrice = basePrice + vasePrice;
  }

  // Method to handle vase change (but price only updates on quantity or price change)
  onVaseChange() {
    this.updateTotalPrice();
  }

  // Method to handle price option change
  onPriceOptionChange() {
    this.updateTotalPrice();

    // Open modal when "subscribe" option is selected
    if (this.priceOption === 'subscribe') {
      this.openSubscriptionModal();
    }
  }

  // Open subscription modal
  openSubscriptionModal() {
    this.isSubscriptionModalOpen = true;
  }

  // Close subscription modal
  closeSubscriptionModal() {
    this.isSubscriptionModalOpen = false;
  }

  // Method to handle subscription
  async subscribe() {
    const templateParams = {
      email: this.email,
      product: this.product.name,
    };

    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey);
      alert('Subscription successful! Welcome email sent.');
      this.closeSubscriptionModal();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to subscribe. Please try again.');
    }
  }
}
