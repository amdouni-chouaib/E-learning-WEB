import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiconsumeService } from '../apiconsume.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  role=sessionStorage.getItem("role")
  token=sessionStorage.getItem("token")

constructor(private route:Router,private service:ApiconsumeService){}
  
  
  ngOnDestroy(): void {
    this.role=""
    this.token=""
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("token")

    this.route.navigate(["/"])
  }


  
}
