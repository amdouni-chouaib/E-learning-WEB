import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-createteacher',
  templateUrl: './createteacher.component.html',
  styleUrls: ['./createteacher.component.css']
})
export class CreateteacherComponent implements OnInit {
  constructor(private service:ApiconsumeService){}
  arr:any[]=[]
  error=""
  success=""
  ngOnInit(): void {
    this.service.getAlltraining().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr ,"training ")
    })
      }
  myForm = new FormGroup({
    firstname :new FormControl("",[Validators.required]),
    lastname :new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    university :new FormControl("tek-up",[Validators.required]),
    role :new FormControl("teacher",[Validators.required]),
    formation :new FormControl("",[Validators.required]),
    
  })
  
    
  onsubmit(){
    this.service.createuser(this.myForm.value).subscribe((data)=>{
      alert("done")
      console.log("formation creer avec success",data)
      this.success="Teacher Added Successfully"
    },(error:any)=>{
      this.error=error.error.error
    })
console.log(this.myForm.value)
  
  }
}
