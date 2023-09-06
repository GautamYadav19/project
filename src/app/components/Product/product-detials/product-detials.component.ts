import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css'],
})
export class ProductDetialsComponent {
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
