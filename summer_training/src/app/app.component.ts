import { Component } from '@angular/core';
import { ApiconsumeService } from './apiconsume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  role:any
  constructor(private service:ApiconsumeService){
  }


  title = 'summer_training';
}
