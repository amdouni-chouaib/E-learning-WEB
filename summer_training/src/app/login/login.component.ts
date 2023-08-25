import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from '../apiconsume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRole: string | undefined; // Add this variable to store user role

  constructor(private service: ApiconsumeService, private route: Router) {}

  myForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onsubmit() {
    this.service.signin(this.myForm.value).subscribe(
      (data: any) => {
        // Assuming the response contains a 'role' property
        const userRole = data.role;
        this.service.updateUserRole(userRole); // Update the user's role using the shared service
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
