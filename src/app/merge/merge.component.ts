import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {
  title = "Merge your pdf"
  subtitle = "Ceci est un sous titre de merge"
  constructor() { }

  ngOnInit() {
  }

}
