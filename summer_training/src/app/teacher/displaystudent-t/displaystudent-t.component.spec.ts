import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystudentTComponent } from './displaystudent-t.component';

describe('DisplaystudentTComponent', () => {
  let component: DisplaystudentTComponent;
  let fixture: ComponentFixture<DisplaystudentTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaystudentTComponent]
    });
    fixture = TestBed.createComponent(DisplaystudentTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
