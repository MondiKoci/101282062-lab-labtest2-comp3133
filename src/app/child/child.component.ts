//Mondi Koci
//101282062
//Date: 2022-04-17
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  template: `
    <div class="notification is-primary">
      <button (click)="sendData()">View Mission</button>
    </div>
  `
})
export class ChildComponent implements OnInit {

  @Input() mission:any;

  constructor() { }
  ngOnInit(): void {
  }

}
