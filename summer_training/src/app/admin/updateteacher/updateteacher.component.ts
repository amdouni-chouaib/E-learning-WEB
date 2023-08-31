import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent implements OnInit{
  data= {
    firstname:"",
    lastname:"",
    email:"",
    formations:""
  }

constructor(private service:ApiconsumeService,private route: ActivatedRoute){}
arr:any[]=[]
  ngOnInit(): void {
    this.service.getAlltraining().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr ,"training ")
    })
    this.service.getoneuser(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        formations: data.formations
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        email: this.data.email,
        formations: this.data.formations
      });
    });
  }
  myForm = new FormGroup({
    firstname :new FormControl(this.data.firstname,[Validators.required]),
    lastname :new FormControl(this.data.lastname,[Validators.required]),
    email :new FormControl(this.data.email,[Validators.required,Validators.email]),
    formations :new FormControl(this.data.formations,[Validators.required])
  })

  onsubmit(){
    this.service.updateFormation(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
      console.log(data)
    })
    }

}
