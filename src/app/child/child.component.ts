import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() mission:any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  onClicked(){
    this.notify.emit(this.mission);
  }

  ngOnInit(): void {
  }

}
