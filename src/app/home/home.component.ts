import { Component, OnInit } from '@angular/core';
import { Action } from '../action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actions = [
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
    new Action('Add image', 'blablablabla', 'add-image'),
    new Action('Create', 'blablablabla', 'create')
  ]

  constructor() { }

  ngOnInit() {
  }

}
