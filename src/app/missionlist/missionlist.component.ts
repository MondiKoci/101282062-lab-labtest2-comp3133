import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionList:any;
  
  constructor(private dataService: DataService) { 
      this.dataService.getMissions().subscribe(data => {
      this.missionList = data;
    })
  }
  onNotified(mission:any){
    this.missionList = mission;
  }
  ngOnInit() {
    
  }

}

