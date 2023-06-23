import { Component } from '@angular/core';

@Component({
  selector: 'app-top-interesting-product',
  templateUrl: './top-interesting-product.component.html',
  styleUrls: ['./top-interesting-product.component.css'],
})
export class TopInterestingProductComponent {
  array: any[] = [
    { name: '../../../../../assets/img_mountains_wide.jpg', num: 142 },
    { name: 'yes', num: 142 },
    { name: 'yes', num: 142 },
    { name: 'yes', num: 142 },
  ];
}
