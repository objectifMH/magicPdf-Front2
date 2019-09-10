import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  title = "Split"
  subtitle = "Ceci est un sous titre de split"
  fileToUpload: File = null; 

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
    console.log(files);
  }

}
