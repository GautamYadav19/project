import { Component } from '@angular/core';

@Component({
  selector: 'app-add-accessories-product',
  templateUrl: './add-accessories-product.component.html',
  styleUrls: ['./add-accessories-product.component.css'],
})
export class AddAccessoriesProductComponent {
  dropdown: boolean = false;
  OnClick() {
    this.dropdown = !this.dropdown;
    console.log(this.dropdown);
  }
}
