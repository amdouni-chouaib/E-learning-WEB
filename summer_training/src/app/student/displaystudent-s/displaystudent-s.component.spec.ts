import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystudentSComponent } from './displaystudent-s.component';

describe('DisplaystudentSComponent', () => {
  let component: DisplaystudentSComponent;
  let fixture: ComponentFixture<DisplaystudentSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaystudentSComponent]
    });
    fixture = TestBed.createComponent(DisplaystudentSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
