import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapItemsComponent } from './wrap-items.component';

describe('WrapItemsComponent', () => {
  let component: WrapItemsComponent;
  let fixture: ComponentFixture<WrapItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapItemsComponent]
    });
    fixture = TestBed.createComponent(WrapItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
