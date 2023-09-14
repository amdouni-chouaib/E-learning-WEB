import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytrainingComponent } from './displaytraining.component';

describe('DisplaytrainingComponent', () => {
  let component: DisplaytrainingComponent;
  let fixture: ComponentFixture<DisplaytrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytrainingComponent]
    });
    fixture = TestBed.createComponent(DisplaytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
