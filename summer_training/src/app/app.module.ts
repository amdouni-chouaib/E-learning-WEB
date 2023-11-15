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
import { PdfComponent } from './teacher/pdf/pdf.component';
import { FilterPipe } from './filter.pipe';
import { DisplaytrainingComponents } from './student/displaytraining/displaytraining.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CdTimerModule } from 'angular-cd-timer';
import { StarRatingModule } from 'angular-star-rating';

import { provideToastr } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { TestquizComponent } from './testquiz/testquiz.component';
import { SidebaradminComponent } from './admin/sidebaradmin/sidebaradmin.component';
import { DetailsTrainingComponents } from './student/details-training/details-training.component';
import { ClassComponent } from './student/class/class.component';

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
    QuizformComponent,
    PdfComponent,
    FilterPipe,
    DisplaytrainingComponents,
    TestquizComponent,
    SidebaradminComponent
    ,DetailsTrainingComponents, ClassComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdTimerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-top-center', // Set the position to top-right
      preventDuplicates: true,
    }),
    StarRatingModule

    
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
