import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessoriesProductComponent } from './add-accessories-product.component';

describe('AddAccessoriesProductComponent', () => {
  let component: AddAccessoriesProductComponent;
  let fixture: ComponentFixture<AddAccessoriesProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAccessoriesProductComponent]
    });
    fixture = TestBed.createComponent(AddAccessoriesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
