import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrainingComponent } from './details-training.component';

describe('DetailsTrainingComponent', () => {
  let component: DetailsTrainingComponent;
  let fixture: ComponentFixture<DetailsTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTrainingComponent]
    });
    fixture = TestBed.createComponent(DetailsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
