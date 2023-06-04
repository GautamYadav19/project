import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodDiscoveryComponent } from './neighborhood-discovery.component';

describe('NeighborhoodDiscoveryComponent', () => {
  let component: NeighborhoodDiscoveryComponent;
  let fixture: ComponentFixture<NeighborhoodDiscoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeighborhoodDiscoveryComponent]
    });
    fixture = TestBed.createComponent(NeighborhoodDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
