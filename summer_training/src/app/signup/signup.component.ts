import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from '../apiconsume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  error=""
  constructor(private service:ApiconsumeService,private route:Router){}

myForm = new FormGroup({
  firstname :new FormControl("",[Validators.required]),
  lastname :new FormControl("",[Validators.required]),
  email:new FormControl ('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  university :new FormControl("",[Validators.required]),
  level :new FormControl("",[Validators.required]),

})

onSubmit(){
this.service.signup(this.myForm.value).subscribe((data:any)=>{
  alert(data.message)
  this.route.navigate(["/login"])
},(error:any)=>{
  this.error=error.error.error
})
}
}
