import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordTeacherComponent } from './dashbord-teacher.component';

describe('DashbordTeacherComponent', () => {
  let component: DashbordTeacherComponent;
  let fixture: ComponentFixture<DashbordTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordTeacherComponent]
    });
    fixture = TestBed.createComponent(DashbordTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
