import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  {path:'', redirectTo: '/missionList', pathMatch: 'full'},
  {path:'missionList', component: MissionlistComponent},
  {path: 'missiondetails', component: MissiondetailsComponent}
  // {path: 'missiondetails/:id', component: MissionlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
