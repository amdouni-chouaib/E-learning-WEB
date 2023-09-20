import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent {
  error=""
  success=""
  
constructor(private service:ApiconsumeService){}

myForm = new FormGroup({
  nom :new FormControl("",[Validators.required]),
  classroom :new FormControl("",[Validators.required]),
  datedebut :new FormControl("",[Validators.required]),
  datefin :new FormControl("",[Validators.required]),
  description :new FormControl("",[Validators.required])
})


onsubmit(){
  this.service.createtraining(this.myForm.value).subscribe((data)=>{
    console.log("formation creer avec success",data)
    this.success="Training Successfully Added"
  },(error:any)=>{
    this.error=error.error.error
  })

}
}
