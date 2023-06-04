import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStyleToYourMapComponent } from './add-style-to-your-map.component';

describe('AddStyleToYourMapComponent', () => {
  let component: AddStyleToYourMapComponent;
  let fixture: ComponentFixture<AddStyleToYourMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStyleToYourMapComponent]
    });
    fixture = TestBed.createComponent(AddStyleToYourMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
