import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}
  openNav() {
    const element = document.getElementById('mySidenav');
    const main = document.getElementById('mySidenav');
    const body = document.getElementById('body');
    console.log('sdsd');

    console.log(element, main, body);
    if (element && main && body) {
      this.renderer.setStyle(element, 'width', '250px');
      this.renderer.setStyle(main, 'margin-left', '250px');
      // this.renderer.setStyle(body, 'opacity', '1');
    }
  }
  closeNav() {
    const element = document.getElementById('mySidenav');
    const main = document.getElementById('mySidenav');
    const body = document.getElementsByTagName('body');
    if (element && main && body) {
      this.renderer.setStyle(element, 'width', '0px');
      this.renderer.setStyle(main, 'margin-left', '0px');
      // this.renderer.setStyle(body, 'opacity', '0.5');
    }
  }
}
