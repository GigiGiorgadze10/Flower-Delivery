import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'; 
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any;
  quantity: number = 1; 
  selectedVase: any = null; 
  priceOption: string = 'oneTime'; 
  totalPrice: number = 0; 
  email: string = ''; 
  isSubscriptionModalOpen: boolean = false; 

  serviceId: string = 'service_xvlwaog'; 
  templateId: string = 'template_ns87j15';
  publicKey: string = 'TtSx7sWPRO9tT1hfx'; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  addToCart() {
    if (!this.product) return;
  
    const cartItem = {
      product: this.product,
      quantity: this.quantity,
      vase: this.selectedVase,
      priceOption: this.priceOption,
      totalPrice: this.totalPrice,
    };
    console.log('Adding to cart:', cartItem);
  
    this.cartService.addToCart(cartItem);
    alert('Product added to cart!');
  }
  

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const id = parseInt(productId, 10);
      this.product = this.productService.getProductById(id);
      this.updateTotalPrice(); 
    }
  }

  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    let basePrice = this.product.price * this.quantity;
    let vasePrice = this.selectedVase ? this.selectedVase.price : 0;

    if (this.priceOption === 'subscribe') {
      basePrice *= 0.75; 
    }

    this.totalPrice = basePrice + vasePrice;
  }

  onVaseChange() {
    this.updateTotalPrice();
  }

  onPriceOptionChange() {
    this.updateTotalPrice();

    if (this.priceOption === 'subscribe') {
      this.openSubscriptionModal();
    }
  }

  openSubscriptionModal() {
    this.isSubscriptionModalOpen = true;
  }

  closeSubscriptionModal() {
    this.isSubscriptionModalOpen = false;
  }

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
