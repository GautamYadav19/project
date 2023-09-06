import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixInOneProductsComponent } from './six-in-one-products.component';

describe('SixInOneProductsComponent', () => {
  let component: SixInOneProductsComponent;
  let fixture: ComponentFixture<SixInOneProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixInOneProductsComponent]
    });
    fixture = TestBed.createComponent(SixInOneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
