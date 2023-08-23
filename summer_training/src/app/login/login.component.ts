import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from '../apiconsume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:ApiconsumeService,private route:Router){}
  myForm = new FormGroup({
    email :new FormControl("",[Validators.email,Validators.required]),
    password :new FormControl("",[Validators.required]),

  })
  onsubmit(){
    
this.service.signin(this.myForm.value).subscribe((data:any)=>{
  console.warn(data)
  

  localStorage.setItem("role",data.role)
  this.route.navigate(["/adminstudent"])
  setTimeout(() => {
    window.location.reload();
  }, 1000);






})


}
}

