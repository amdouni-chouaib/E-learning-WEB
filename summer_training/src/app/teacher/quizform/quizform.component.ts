import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiconsumeService } from 'src/app/apiconsume.service';
import  jwt_decode from 'jwt-decode'; // Import jwt_decode

@Component({
  selector: 'app-quizform',
  templateUrl: './quizform.component.html',
  styleUrls: ['./quizform.component.css']
})
export class QuizformComponent implements OnInit {
  questionForm: any;
  formation: any;
  token: any;
  decodedtoken: any;
  id: any;
  error=""
  success=""

  constructor(private formBuilder: FormBuilder, private quizService: ApiconsumeService) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.decodedtoken = jwt_decode(this.token);
    this.id = this.decodedtoken.userId;
    console.log("logged in with id ", this.id);

    this.quizService.getoneuser(this.id).subscribe((data: any) => {
      this.formation = data.formations[0];
      this.initializeForm();
    });
  }

  initializeForm() {
    this.questionForm = this.formBuilder.group({
      description: ['', Validators.required],
      alternatives: this.formBuilder.array([
        this.createOption()
      ]),
      formation: []
    });

    this.questionForm.get('formation').setValue(this.formation);
  }

  createOption() {
    return this.formBuilder.group({
      text: ['', Validators.required],
      isCorrect: false
    });
  }

  addOption() {
    const alternatives = this.questionForm.get('alternatives') as FormArray;
    alternatives.push(this.createOption());
  }

  submitForm() {
    if (this.questionForm.valid) {
      this.quizService.postQuizQuestions(this.questionForm.value)
        .subscribe(
          (response) => {
            console.log('Question added:', response);
            this.success='Question Added Successfully'
            this.questionForm.reset();
          },
          (error) => {
            this.error=error.error.error
            console.error('Error adding question:', error);
          }
      );
    }
  }
}