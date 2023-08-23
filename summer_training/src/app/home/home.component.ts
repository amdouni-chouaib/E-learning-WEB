import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from '../apiconsume.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedFile: File | null = null;

  constructor(private service: ApiconsumeService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile, this.selectedFile.name);

      this.service.uploadFile(formData).subscribe(
        (data: any) => {
          console.log('File uploaded successfully', data);
        },
        (error) => {
          console.error('File upload failed', error);
        }
      );
    }
  }
}