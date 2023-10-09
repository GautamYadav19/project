import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetialMobileViewComponent } from './product-detial-mobile-view.component';

describe('ProductDetialMobileViewComponent', () => {
  let component: ProductDetialMobileViewComponent;
  let fixture: ComponentFixture<ProductDetialMobileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetialMobileViewComponent]
    });
    fixture = TestBed.createComponent(ProductDetialMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
