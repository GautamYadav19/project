import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareWithSimilarProductsComponent } from './compare-with-similar-products.component';

describe('CompareWithSimilarProductsComponent', () => {
  let component: CompareWithSimilarProductsComponent;
  let fixture: ComponentFixture<CompareWithSimilarProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareWithSimilarProductsComponent]
    });
    fixture = TestBed.createComponent(CompareWithSimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
