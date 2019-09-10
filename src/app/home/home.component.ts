import { Component, OnInit } from '@angular/core';
import { Action } from '../action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "C'est magique !"
  subtitle = "Manipuler des pdf n'a jamais été aussi simple."

  actions = [
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
    new Action('Split', 'blablablabla', '/split'),
    new Action('Merge', 'blablablabla', '/merge'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
