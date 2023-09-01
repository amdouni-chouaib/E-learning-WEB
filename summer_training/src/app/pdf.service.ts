import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  urls = 'http://localhost:3001/';

  constructor(private http : HttpClient) {  } 

  uploadpdf(pdf:any):Observable<any>{

    return this.http.post<any>("http://localhost:3001/uploadpdf",pdf);
  }
  
  

  delete(id: any){
    return this.http.delete(this.urls + 'delete/' + id);
  }

  update(id: any){
    return this.http.put(this.urls + 'update/' + id, null);
  }
  getPdfById(id: any){ 
    return this.http.get(this.urls + 'getbyid/'+id);
  }

  getoneformationpdf(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:3001/"+id);
  }


}