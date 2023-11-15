import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent {
  error = "";
  success = "";
  picture=""
  constructor(private service: ApiconsumeService) {}

  myForm = new FormGroup({
    nom: new FormControl("", [Validators.required]),
    classroom: new FormControl("", [Validators.required]),
    datedebut: new FormControl("", [Validators.required]),
    datefin: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    picture: new FormControl("", [Validators.required]),
  });
  onFileSelect(event: any): void {
    const fileInput = event.target.files[0];
    this.picture=fileInput
    this.myForm.patchValue({
      picture: fileInput
    });
    this.myForm.get('picture')?.updateValueAndValidity();
  }

  onsubmit() {
      const formData = new FormData();

      formData.append('nom', this.myForm.value.nom+"");
      formData.append('classroom', this.myForm.value.classroom+"");
      formData.append('datedebut', this.myForm.value.datedebut+"");
      formData.append('datefin', this.myForm.value.datefin+"");
      formData.append('description', this.myForm.value.description+"");
      formData.append('picture', this.picture);

      this.service.createtrainings(formData).subscribe(
        (data) => {
          console.log("Formation created successfully", data);
          this.success = 'Training Successfully Added';
        },
        (error: any) => {
          this.error = error.error.error;
        }
      );
   
  }

 
}