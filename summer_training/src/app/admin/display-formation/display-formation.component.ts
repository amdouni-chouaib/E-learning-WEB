import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-display-formation',
  templateUrl: './display-formation.component.html',
  styleUrls: ['./display-formation.component.css']
})
export class DisplayFormationComponent implements OnInit {
  constructor(private service:ApiconsumeService){}
  p:number=1
  searchtext:any;

  formation:any=new Observable()
  ngOnInit(): void {
    this.service.getAlltraining().subscribe((data:any)=>{
      this.formation=data
      console.log(this.formation)
    })
  }
  deleteteacher(index:any){
  this.service.deleteonetraining(index._id).subscribe((data:any)=>{
    alert(data.message)
  })
  }



}
