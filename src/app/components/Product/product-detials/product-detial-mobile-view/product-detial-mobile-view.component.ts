import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detial-mobile-view',
  templateUrl: './product-detial-mobile-view.component.html',
  styleUrls: ['./product-detial-mobile-view.component.css'],
})
export class ProductDetialMobileViewComponent {
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
