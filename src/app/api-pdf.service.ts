import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPdfService {

  constructor(private http:HttpClient ) { }

  upload(file : File) {
    console.log("je passe dans mon service");
    return this.http.post('http://localhost:8080/mavenpdf/api/pdf/upload', file)
    
  }

  

  test() {
    console.log("je passe dans mon service test");
    return this.http.get('http://localhost:8080/mavenpdf/api/pdf/hello')
    
  }

  posts() {
    
    console.log("je passe dans mon service posts");
    return this.http.get('http://localhost:3000/posts');
  }

  postUploadFile(fileToUpload: File) : Observable<any> {
    //console.log(" file > " + fileToUpload )
    const endpoint = 'http://localhost:8080/mavenpdf/api/pdf/upload';
    const formData: FormData = new FormData();
    formData.append('fileUp', fileToUpload , fileToUpload.name);
    //formData.append('fileName' , fileToUpload.name );
    return this.http.post(endpoint, formData);
      
}

getSplit(fileSplit: String) {
  console.log("on va spliter "+ fileSplit); 
  const endpoint = 'http://localhost:8080/mavenpdf/api/pdf/split/'+fileSplit;
  return this.http.get(endpoint);
    
}
  
}
