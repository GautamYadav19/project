import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartProductComponent } from './add-to-cart-product.component';

describe('AddToCartProductComponent', () => {
  let component: AddToCartProductComponent;
  let fixture: ComponentFixture<AddToCartProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCartProductComponent]
    });
    fixture = TestBed.createComponent(AddToCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
