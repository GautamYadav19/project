import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInterestingProductComponent } from './top-interesting-product.component';

describe('TopInterestingProductComponent', () => {
  let component: TopInterestingProductComponent;
  let fixture: ComponentFixture<TopInterestingProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopInterestingProductComponent]
    });
    fixture = TestBed.createComponent(TopInterestingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
