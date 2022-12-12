import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
		PointsListComponent,
		NewPointComponent,
		MapComponent
	],
  imports: [
    CommonModule,
    PointsRoutingModule
  ]
})
export class PointsModule { }
