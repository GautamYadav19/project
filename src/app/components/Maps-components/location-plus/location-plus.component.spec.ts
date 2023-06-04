import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPlusComponent } from './location-plus.component';

describe('LocationPlusComponent', () => {
  let component: LocationPlusComponent;
  let fixture: ComponentFixture<LocationPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationPlusComponent]
    });
    fixture = TestBed.createComponent(LocationPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
