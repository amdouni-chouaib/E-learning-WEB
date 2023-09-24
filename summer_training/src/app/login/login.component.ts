import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from '../apiconsume.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRole: string | undefined; // Add this variable to store user role
  jwt : any = ""
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
        if(userRole==="admin"){
          // this.route.navigate(["/adminstudent"])
          this.route.navigate(["/dashbordadmin"])

        }
        if(userRole==="teacher"){
          this.route.navigate(["/dashbordteacher"])
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
        console.error('Login failed', error);
      }
    );
  }
}
