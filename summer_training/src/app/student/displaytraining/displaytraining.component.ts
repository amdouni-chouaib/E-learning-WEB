import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from 'src/app/apiconsume.service';
import jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-displaytraining',
  templateUrl: './displaytraining.component.html',
  styleUrls: ['./displaytraining.component.css']
})
export class DisplaytrainingComponents implements OnInit{
  id:any=""
  token:any=""
  decodetoken:any=""
  arr:any[]=[]
  constructor(private service:ApiconsumeService){}

  ngOnInit(): void {
    this.token=localStorage.getItem("token")
    this.decodetoken=jwtDecode(this.token)
    this.id=this.decodetoken.userId
    this.service.getAlltraining().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr)
    },((error:any)=>{
      console.log(error)
    }))
  
  }

send(i:any){  
    // this.service.data=i
    console.log(i._id)
      }



  joining(i:any){
    let index=i._id
     this.service.updateuserF(this.id,index).subscribe((data:any)=>{
      console.log(data.users.formations)
     })
  }

}
