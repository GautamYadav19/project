import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourInOneProductsComponent } from './four-in-one-products.component';

describe('FourInOneProductsComponent', () => {
  let component: FourInOneProductsComponent;
  let fixture: ComponentFixture<FourInOneProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourInOneProductsComponent]
    });
    fixture = TestBed.createComponent(FourInOneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
