import { Component } from '@angular/core';

@Component({
  selector: 'app-scroller-products',
  templateUrl: './scroller-products.component.html',
  styleUrls: ['./scroller-products.component.css'],
})
export class ScrollerProductsComponent {
  dropdown: boolean = false;
  OnClick() {
    this.dropdown = !this.dropdown;
    console.log(this.dropdown);
  }
}
