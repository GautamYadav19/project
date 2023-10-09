import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detial-laptop-and-tablet-view',
  templateUrl: './product-detial-laptop-and-tablet-view.component.html',
  styleUrls: ['./product-detial-laptop-and-tablet-view.component.css'],
})
export class ProductDetialLaptopAndTabletViewComponent {
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
