import { Component, OnInit } from '@angular/core';
import { ApiconsumeService } from './apiconsume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {




  role:any
  constructor(private service:ApiconsumeService){
  }

  ngOnInit(): void {
    this.service.userRole$.subscribe((role:any)=>{
      this.role = role;
    })
  }


  title = 'summer_training';
}
