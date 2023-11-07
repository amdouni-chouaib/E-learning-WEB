import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-dashbordadmin',
  templateUrl: './dashbordadmin.component.html',
  styleUrls: ['./dashbordadmin.component.css']
})
export class DashbordadminComponent {
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
