import { Component } from '@angular/core';

@Component({
  selector: 'app-product-wish-list',
  templateUrl: './product-wish-list.component.html',
  styleUrls: ['./product-wish-list.component.css'],
})
export class ProductWishListComponent {
  newItem: string = '';
  items: string[] = [];

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
