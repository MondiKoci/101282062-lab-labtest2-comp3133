import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  missionList:any;
  mission:any;

  constructor(private dataService: DataService){
    this.dataService.getMissionByParam().subscribe(data =>{
      this.missionList = data;
    })
  }

  getAllMissions(){
    //here we need to subscribe to the observable in order to get the data 
    //and then we can use it in the template 
    this.dataService.getMissions().subscribe(data => {
      this.missionList = data;
      console.log(this.missionList)
    })
  }
  
  getById(missionId:string){
    this.dataService.getMissionByNumber(missionId).subscribe(data =>{
    
      this.mission = data;

    });
  }
}
