import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormationComponent } from './display-formation.component';

describe('DisplayFormationComponent', () => {
  let component: DisplayFormationComponent;
  let fixture: ComponentFixture<DisplayFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFormationComponent]
    });
    fixture = TestBed.createComponent(DisplayFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
