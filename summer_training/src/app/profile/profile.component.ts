import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { ApiconsumeService } from '../apiconsume.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data= {
    firstname:"",
    lastname:"",
    email:"",
    university:""
  }



  constructor(private service:ApiconsumeService,private route: ActivatedRoute){}
  myForm = new FormGroup({
    firstname :new FormControl(this.data.firstname,[Validators.required]),
    lastname :new FormControl(this.data.lastname,[Validators.required]),
    email :new FormControl(this.data.email,[Validators.required,Validators.email]),
    university :new FormControl(this.data.university,[Validators.required])
  })
  ngOnInit(): void {
    
    this.service.getoneuser(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        university: data.university
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        email: this.data.email,
        university: this.data.university
      });
    });
  }



onsubmit(){
this.service.updateoneuser(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
  console.log(data)
})

}
}
