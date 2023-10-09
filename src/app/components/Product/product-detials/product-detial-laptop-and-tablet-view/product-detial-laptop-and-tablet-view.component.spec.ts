import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetialLaptopAndTabletViewComponent } from './product-detial-laptop-and-tablet-view.component';

describe('ProductDetialLaptopAndTabletViewComponent', () => {
  let component: ProductDetialLaptopAndTabletViewComponent;
  let fixture: ComponentFixture<ProductDetialLaptopAndTabletViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetialLaptopAndTabletViewComponent]
    });
    fixture = TestBed.createComponent(ProductDetialLaptopAndTabletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
