import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  misssion:any
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataService: DataService, private aRoute: ActivatedRoute){
    let id = this.aRoute.snapshot.params['id']
    let d = this.dataService.getMissionByNumber(id).subscribe( (data) => {
      this.misssion = data
      console.log(data)
    })
  }
  ngOnInit(): void {
  }

}
