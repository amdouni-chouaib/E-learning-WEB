import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserComponent } from './display-user.component';

describe('DisplayUserComponent', () => {
  let component: DisplayUserComponent;
  let fixture: ComponentFixture<DisplayUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayUserComponent]
    });
    fixture = TestBed.createComponent(DisplayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
