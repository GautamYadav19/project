import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  images = [
    { img: '../../../assets/img_mountains_wide.jpg' },
    { img: '../../../assets/img_nature_wide.jpg' },
    { img: '../../../assets/img_snow_wide.jpg' },
  ];
}
