import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PdfService } from 'src/app/pdf.service';
import  jwt_decode from 'jwt-decode'; // Import jwt_decode
import { ApiconsumeService } from 'src/app/apiconsume.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit{
  error=""
  success=""
  questionForm: any;
  formation: any;
  token: any;
  decodedtoken: any;
  id: any;
  pdf = {
    
    pdfFile:File,
  }
  
  pdfs: any;

  pdfFile: any;
  onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.pdfFile = event.target.files[0];

}
  constructor(private _data:PdfService, private quizService:ApiconsumeService
    ){}
  ngOnInit(){
    this.token = localStorage.getItem("token");
    this.decodedtoken = jwt_decode(this.token);
    this.id = this.decodedtoken.userId;
    console.log("logged in with id ", this.id);

    this.quizService.getoneuser(this.id).subscribe((data: any) => {
      this.formation = data.formations[0];
    });
  }
  myForm=new FormGroup({
    

    pdfFile:new FormControl(File),
    formations: new FormControl(),
  })
  sendData(){
    this.myForm.get('formations')?.setValue(this.formation);

   let pdf = {
      
      pdfFile:this.pdfFile,
    }

    let formData=new  FormData();
    
    formData.append("pdf" ,this.pdfFile)
    formData.append("formations",this.formation)
    console.log(pdf);

 this._data.uploadpdf(formData).subscribe((data:any)=>{
  console.log(data);
  this.success="File Uploaded Successfully"
 },(error:any)=>{
  this.error=error.error.error
 }) 
}
 


  


delete(id: any){

  this._data.delete(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}

done(id: any){

  this._data.update(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}



}