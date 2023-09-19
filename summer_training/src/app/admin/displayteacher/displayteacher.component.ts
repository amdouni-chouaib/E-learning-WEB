import { Component } from '@angular/core';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-displayteacher',
  templateUrl: './displayteacher.component.html',
  styleUrls: ['./displayteacher.component.css']
})
export class DisplayteacherComponent {
  teacher:any[]=[]
  searchtext:any;
  p:number=1
  constructor(private service:ApiconsumeService){}
  ngOnInit(): void {
    this.service.getallteacher().subscribe((data:any)=>{
      this.teacher=data
      console.log(this.teacher)
    })
  }
  deleteteacher(index:any){
    console.log(index)
    this.service.deleteoneuser(index._id).subscribe((data:any)=>{
      alert(data.message)
    })
  }
}
