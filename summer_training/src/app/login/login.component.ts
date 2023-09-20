import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from '../apiconsume.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRole: string | undefined; // Add this variable to store user role
  jwt : any = ""
  error=""
  constructor(private toastr: ToastrService,private service: ApiconsumeService, private route: Router) {}

  myForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onsubmit() {
  
    this.service.signin(this.myForm.value).subscribe(
      (data: any) => {
        // Assuming the response contains a 'role' property
        const userRole = data.role;
        if(userRole==="admin"){
          this.route.navigate(["/adminstudent"])
        }
        if(userRole==="teacher"){
          this.route.navigate(["/teacherquiz"])
        }
        if(userRole==="student"){
          this.route.navigate(["/displaytrainingstudent"])
        }
        this.service.updateUserRole(userRole); 
        localStorage.setItem("token",data.token)
        this.jwt = jwt_decode(data.token)
        // this.route.navigate(["/profile/"+this.jwt.userId])
      },
      (error) => {
        this.error=error.error.error
      }
    );
  }
}
