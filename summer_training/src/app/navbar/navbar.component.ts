import { Component, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiconsumeService } from '../apiconsume.service';
import jwt_decode from 'jwt-decode';
import { RoleService } from '../role.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  userRole: string | null = null;
  token:any=localStorage.getItem("token")
  id:any=""
  iduser:any
  constructor(private route:Router,private service:ApiconsumeService){
}
  ngOnInit(): void {
    this.service.userRole$.subscribe((role:any)=>{
      this.userRole=role
    })
    this.id=jwt_decode(this.token)
    this.iduser="/profile/"+this.id.userId
  }
  
  logged(){
    
  }
  
  logout(){
     localStorage.removeItem('token')
     this.userRole=null
     this.route.navigate(["/login"])
  }


  
}
