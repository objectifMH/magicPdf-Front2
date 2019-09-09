import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  action: Action; 

  constructor() { }

  ngOnInit() {
  }

}
