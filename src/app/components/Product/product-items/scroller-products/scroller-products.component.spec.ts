import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerProductsComponent } from './scroller-products.component';

describe('ScrollerProductsComponent', () => {
  let component: ScrollerProductsComponent;
  let fixture: ComponentFixture<ScrollerProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollerProductsComponent]
    });
    fixture = TestBed.createComponent(ScrollerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
