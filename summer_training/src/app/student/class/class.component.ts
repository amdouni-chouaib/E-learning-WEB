import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  constructor(private service:ApiconsumeService,private route:Router) {}
  arr:any[]=[]
  userid:any
  ngOnInit(): void {
    this.service.usertoken$.subscribe((data:any)=>{
      this.userid=data.userId
    })
    this.service.getcourses(this.userid).subscribe((data:any)=>{
      this.arr=data
      console.log(data)
    })
  }
  sending(data:any){
    this.route.navigate(["/test/"+data])
  }

}
