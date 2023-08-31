import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DisplayUserComponent } from './admin/display-user/display-user.component';
import { CreateFormationComponent } from './admin/create-formation/create-formation.component';
import { CreateteacherComponent } from './admin/createteacher/createteacher.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayteacherComponent } from './admin/displayteacher/displayteacher.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'profile/:id',component:ProfileComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:SignupComponent
  },
  {
    path:'adminstudent',component:DisplayUserComponent
  },
  {
    path:'admincreateformation',component:CreateFormationComponent
  },
  {
    path:'admincreateteacher',component:CreateteacherComponent
  },
  {
    path:'admindisplayteacher',component:DisplayteacherComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
