import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutocompleteAddessComponent } from './add-autocomplete-addess.component';

describe('AddAutocompleteAddessComponent', () => {
  let component: AddAutocompleteAddessComponent;
  let fixture: ComponentFixture<AddAutocompleteAddessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAutocompleteAddessComponent]
    });
    fixture = TestBed.createComponent(AddAutocompleteAddessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
