import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayUserComponent } from './admin/display-user/display-user.component';
import { CreateteacherComponent } from './admin/createteacher/createteacher.component';
import { UpdateteacherComponent } from './admin/updateteacher/updateteacher.component';
import { DisplayteacherComponent } from './admin/displayteacher/displayteacher.component';
import { DisplaystudentTComponent } from './teacher/displaystudent-t/displaystudent-t.component';
import { DisplaystudentSComponent } from './student/displaystudent-s/displaystudent-s.component';
import { CreateFormationComponent } from './admin/create-formation/create-formation.component';
import { DisplayFormationComponent } from './admin/display-formation/display-formation.component';
import { UpdateFormationComponent } from './admin/update-formation/update-formation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode'; // Import jwt_decode
import { ProfileComponent } from './profile/profile.component'; // Note the change in the import statement
import { NgxPaginationModule } from 'ngx-pagination';
import { QuizformComponent } from './teacher/quizform/quizform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DisplayUserComponent,
    CreateteacherComponent,
    UpdateteacherComponent,
    DisplayteacherComponent,
    DisplaystudentTComponent,
    DisplaystudentSComponent,
    CreateFormationComponent,
    DisplayFormationComponent,
    UpdateFormationComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    FooterComponent,
    ProfileComponent,
    QuizformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
