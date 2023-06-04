import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMapViewComponent } from './choose-map-view.component';

describe('ChooseMapViewComponent', () => {
  let component: ChooseMapViewComponent;
  let fixture: ComponentFixture<ChooseMapViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseMapViewComponent]
    });
    fixture = TestBed.createComponent(ChooseMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
