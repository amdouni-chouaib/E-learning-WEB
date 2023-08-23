import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteacherComponent } from './displayteacher.component';

describe('DisplayteacherComponent', () => {
  let component: DisplayteacherComponent;
  let fixture: ComponentFixture<DisplayteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayteacherComponent]
    });
    fixture = TestBed.createComponent(DisplayteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
