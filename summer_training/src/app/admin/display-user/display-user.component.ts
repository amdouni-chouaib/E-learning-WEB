import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  students:any[]=[]
  searchtext:any;
  p:number=1
  constructor(private service:ApiconsumeService){}
  ngOnInit(): void {
    this.service.getAllUser().subscribe((data:any)=>{
      this.students=data
      console.log(this.students)
    })
  }





}
