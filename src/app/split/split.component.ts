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
    console.log("Debut du split  : " + this.fileToUpload)
    
    
    this.apiservice.postUploadFile(this.fileToUpload).subscribe(
        result => {
          console.log("le nom du fichier uploader sur le serveur est " +result.nomPdf); 
          this.apiservice.getSplit(result.nomPdf).subscribe(
            resultSplit => result + " est bien splité ",
            error => "On a pas réussi a spliter "+ result 
          )
        }
        ,
        error => console.log('Une erreur est survenue, j arrive pas à uploader : ' + this.fileToUpload.name, error)
      )
    
  }

}
