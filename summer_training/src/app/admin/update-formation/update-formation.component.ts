import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit{
  data= {
    nom:"",
    datedebut:"",
    datefin:"",
    description:""
  }

constructor(private service:ApiconsumeService,private route: ActivatedRoute){}
  ngOnInit(): void {
    
    this.service.getonetraining(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        nom: data.nom,
        datedebut: data.datedebut,
        datefin: data.datefin,
        description: data.description
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        nom: this.data.nom,
        datedebut: this.data.datedebut,
        datefin: this.data.datefin,
        description: this.data.description
      });
    });
  }
  myForm = new FormGroup({
    nom :new FormControl(this.data.nom,[Validators.required]),
    datedebut :new FormControl(this.data.datedebut,[Validators.required]),
    datefin :new FormControl(this.data.datefin,[Validators.required,Validators.email]),
    description :new FormControl(this.data.description,[Validators.required])
  })

  onsubmit(){
    this.service.updateonetraining(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
      console.log(data)
    })
    }
}
