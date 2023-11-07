import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {
  userRole: any | null = null;

  constructor(private route:Router ,private service:ApiconsumeService){
  }
  ngOnInit(): void {
    this.service.userRole$.subscribe((role:any)=>{
      this.userRole=role
    })  
  
  }

  logout(){
    localStorage.removeItem('token')
    this.userRole=null
    this.service.updateUserRole(null)
    this.route.navigate(["/login"])
 }

}
