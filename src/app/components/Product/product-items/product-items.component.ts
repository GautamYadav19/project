import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent {
  constructor() {}
  array: any[] = [
    { img: '../../../../assets/img_mountains_wide.jpg', name: 'single band' },
    { img: '../../../../assets/img_nature_wide.jpg', name: 'dual band' },
    { img: '../../../../assets/img_snow_wide.jpg', name: 'next band' },
  ];
}
