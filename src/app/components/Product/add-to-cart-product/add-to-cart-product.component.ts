import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-product',
  templateUrl: './add-to-cart-product.component.html',
  styleUrls: ['./add-to-cart-product.component.css'],
})
export class AddToCartProductComponent {
  quantity: number = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
