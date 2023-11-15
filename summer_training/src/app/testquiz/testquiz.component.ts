import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiconsumeService } from '../apiconsume.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testquiz',
  templateUrl: './testquiz.component.html',
  styleUrls: ['./testquiz.component.css']
})
export class TestquizComponent implements OnInit, OnDestroy {
  minutes: number = 45;
  seconds: number = 0;
  timer: any;
  arr: any[] = [];
  selectedOptions: Map<number, number> = new Map();
  isSubmitted: boolean = false;
  score: number = 0;

  constructor(private service: ApiconsumeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getquiz(id).subscribe((data: any) => {
      this.arr = data;
    });

    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.stopTimer();
        this.calculateScore();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      if (!this.isSubmitted) {
        this.calculateScore();
      }
    }
  }

  onSelectOption(questionIndex: number, optionIndex: number) {
    this.selectedOptions.set(questionIndex, optionIndex);
  }

  calculateScore() {
    this.isSubmitted = true;
    this.score = 0;

    this.arr.forEach((question, i) => {
      const selectedOptionIndex = this.selectedOptions.get(i);

      if (selectedOptionIndex !== undefined) {
        if (question.alternatives[selectedOptionIndex].isCorrect) {
          this.score += 1;
        }
      }
    });

    const totalQuestions = this.arr.length;
    const percentage = (this.score / totalQuestions) * 100;

    if (percentage >= 80) {
      alert(`Congratulations! You scored ${percentage}% and passed.`);
    } else {
      alert(`You scored ${percentage}% and failed.`);
    }
  }

  isOptionSelected(questionIndex: number, optionIndex: number): boolean {
    return this.selectedOptions.get(questionIndex) === optionIndex;
  }
  isMultipleCorrect(alternatives: any[]): boolean {
    return alternatives.filter(a => a.isCorrect).length > 1;
  }
}

      