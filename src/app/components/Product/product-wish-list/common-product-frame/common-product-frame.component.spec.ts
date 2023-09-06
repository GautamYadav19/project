import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductFrameComponent } from './common-product-frame.component';

describe('CommonProductFrameComponent', () => {
  let component: CommonProductFrameComponent;
  let fixture: ComponentFixture<CommonProductFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonProductFrameComponent]
    });
    fixture = TestBed.createComponent(CommonProductFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
