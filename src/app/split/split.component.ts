import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPdfService } from '../api-pdf.service';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  title = "Split"
  subtitle = "Ceci est un sous titre de split"
  fileToUpload: File = null; 

  constructor(private apiservice : ApiPdfService ) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
    console.log("je vais envoyé en post : " + this.fileToUpload.type)
    /*
    this.apiservice.test().subscribe(
      x => {}
      ,
      error => console.log('Une erreur est survenue, j"arrive pas a a creer hellopdf', error)
    );
      */
    
    this.apiservice.postFile(this.fileToUpload).subscribe(
        x => {console.log(this.fileToUpload);}
        ,
        error => console.log('Une erreur est survenue, j"arrive pas à charger à encoyer le pdf', error)
      )
    
  }

}
