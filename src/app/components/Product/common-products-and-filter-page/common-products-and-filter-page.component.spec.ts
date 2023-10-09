import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductsAndFilterPageComponent } from './common-products-and-filter-page.component';

describe('CommonProductsAndFilterPageComponent', () => {
  let component: CommonProductsAndFilterPageComponent;
  let fixture: ComponentFixture<CommonProductsAndFilterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonProductsAndFilterPageComponent]
    });
    fixture = TestBed.createComponent(CommonProductsAndFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
