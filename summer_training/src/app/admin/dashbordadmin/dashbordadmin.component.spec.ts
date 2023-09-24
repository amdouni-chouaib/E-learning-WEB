import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordadminComponent } from './dashbordadmin.component';

describe('DashbordadminComponent', () => {
  let component: DashbordadminComponent;
  let fixture: ComponentFixture<DashbordadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordadminComponent]
    });
    fixture = TestBed.createComponent(DashbordadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
