import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.css']
})
export class DetailsTrainingComponents implements OnInit {
  constructor(private service:ApiconsumeService,private route: ActivatedRoute){}
  data:any
  id:any
  userid:any
  datas:any

  arr:any[]=[]

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.service.id=id
    this.id=id
    this.service.getcomment(id).subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr)
    })
    this.service.getonetraining(id).subscribe((data:any)=>{
      this.data=data
      console.log(data)
    })  

  }
  
  
  
  
  
  
  
  
  
  
  myForm = new FormGroup({
    comment :new FormControl("",[Validators.required])
    
  })
  
  
  submited(){
    this.service.usertoken$.subscribe((data:any)=>{
      this.userid=data.userId
    })
    
    let data={trainingId:this.id,userId:this.userid,comment:this.myForm.value.comment}
    // console.log(data)
    this.service.createcomment(data).subscribe((data:any)=>{
      console.log(data)
    })
  }


  joining(){
    this.service.usertoken$.subscribe((data:any)=>{
      this.userid=data.userId
    })
    console.log(this.userid)
    this.service.updateuserF(this.userid,this.data).subscribe((data:any)=>{
      console.log(data)
    })
  }
  
  
  
  // joining(){
    
  //    this.service.updateuserF(this.id,index).subscribe((data:any)=>{
  //     console.log(data.users.formations)
  //    })
  // }
}
