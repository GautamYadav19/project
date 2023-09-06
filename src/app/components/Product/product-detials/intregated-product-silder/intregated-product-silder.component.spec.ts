import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntregatedProductSilderComponent } from './intregated-product-silder.component';

describe('IntregatedProductSilderComponent', () => {
  let component: IntregatedProductSilderComponent;
  let fixture: ComponentFixture<IntregatedProductSilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntregatedProductSilderComponent]
    });
    fixture = TestBed.createComponent(IntregatedProductSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
