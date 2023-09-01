import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizformComponent } from './quizform.component';

describe('QuizformComponent', () => {
  let component: QuizformComponent;
  let fixture: ComponentFixture<QuizformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizformComponent]
    });
    fixture = TestBed.createComponent(QuizformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
