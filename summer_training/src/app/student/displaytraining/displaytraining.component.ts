import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-displaytraining',
  templateUrl: './displaytraining.component.html',
  styleUrls: ['./displaytraining.component.css']
})
export class DisplaytrainingComponents implements OnInit{
  arr:any[]=[]
  constructor(private service:ApiconsumeService){}
  ngOnInit(): void {
    this.service.getAlltraining().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr)
    })
  
  }

}
