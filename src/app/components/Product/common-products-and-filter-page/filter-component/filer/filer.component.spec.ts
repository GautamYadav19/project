import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerComponent } from './filer.component';

describe('FilerComponent', () => {
  let component: FilerComponent;
  let fixture: ComponentFixture<FilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilerComponent]
    });
    fixture = TestBed.createComponent(FilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
