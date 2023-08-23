import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateteacherComponent } from './updateteacher.component';

describe('UpdateteacherComponent', () => {
  let component: UpdateteacherComponent;
  let fixture: ComponentFixture<UpdateteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateteacherComponent]
    });
    fixture = TestBed.createComponent(UpdateteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
