import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiconsumeService {
  constructor(private http:HttpClient) { }

  data:any
  id:any


  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();


  updateUserRole(role: any) {
    this.userRoleSubject.next(role);
  }

  private token = new BehaviorSubject<string | null>(null);
  usertoken$ = this.token.asObservable();


  updateUsertoken(token: any) {
    this.token.next(token);
  }

  signin(user: any):Observable<any> {
   return  this.http.post<any>('http://localhost:3001/login', user);
  }
 
  signup(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/signup", user);
  }

  uploadFile(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/uploads", user);
  }

  getAllUser():Observable<any>{
    return this.http.get<any>("http://localhost:3001/getall");
  }
  createtraining(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/createtraining", data);
  }
  createtrainings(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/formationss", data);
  }
  createuser(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/createuser", data);
  }
  getAlltraining():Observable<any>{
    return this.http.get<any>("http://localhost:3001/getalltrainings");
  }
  



  getoneuser(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:3001/"+id);
  }
  updateoneuser(id:any,data:any):Observable<any>{
    return this.http.put<any>("http://localhost:3001/"+id,data);
  }


  getallteacher():Observable<any>{
    return this.http.get("http://localhost:3001/getteacher")
  }

  
  deleteoneuser(id:any):Observable<any>{
    return this.http.delete("http://localhost:3001/"+id)
  }
  deleteonetraining(id:any):Observable<any>{
    return this.http.delete("http://localhost:3001/training/"+id)
  }
  getonetraining(id:any):Observable<any>{
    return this.http.get("http://localhost:3001/training/"+id)
  }
  updateonetraining(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:3001/training/"+id,data)
  }

  createcomment(data:any):Observable<any>{
    return this.http.post("http://localhost:3001/comments/new",data)
  }
  updateFormation(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:3001/formation/"+id,data)
  }
  postQuizQuestions(questions: any):Observable<any> {
    return this.http.post<any>("http://localhost:3001/quiz", questions);
  }
  updateuserF(id:any,formations:any):Observable<any> {
    return this.http.put<any>("http://localhost:3001/traininguser/"+id,{formations});
  }
  
  getcomment(id:any):Observable<any>{
    return this.http.get("http://localhost:3001/comments/formation/"+id+"/comments")
  }
  getcourses(id:any):Observable<any>{
    return this.http.get("http://localhost:3001/users/"+id+"/pdf-formations")
  }
  getquiz(id:any):Observable<any>{
    return this.http.get("http://localhost:3001/formations/"+id+"/quizzes")
  }

  



}
