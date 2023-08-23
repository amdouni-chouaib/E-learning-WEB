import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiconsumeService } from '../apiconsume.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy {

  isAdmin: boolean = false;
  isTeacher: boolean = false;
  isStudent: boolean = false;
  isGuest:boolean = true;
  allrole:boolean = false;

 

constructor(private route:Router,private service:ApiconsumeService){
}
  ngOnInit(): void {
    this.logged()
  }
  
  logged(){
     const userRole = localStorage.getItem('role')
    if (userRole === 'admin') {
      this.isAdmin = true 
      this.allrole=true
            this.isGuest=false

    } else if (userRole === 'teacher') {
      this.isTeacher = true
      this.allrole=true

            this.isGuest=false

    } else if (userRole === 'student') {
      this.isStudent = true 
      this.allrole=true

            this.isGuest=false

    }


    console.log("helllllo" , userRole)
  }
  ngOnDestroy(): void {
    localStorage.removeItem('role')
    this.route.navigate(["/login"])
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  

    
  }


  
}
