import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiconsumeService {
  constructor(private http:HttpClient) { }
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();

  updateUserRole(role: string) {
    this.userRoleSubject.next(role);
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
  



}
