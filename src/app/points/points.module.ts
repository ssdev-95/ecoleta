import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { MapComponent } from './map/map.component';
import { NewPointComponent } from './new/new.component';


@NgModule({
  declarations: [
		MapComponent,
		NewPointComponent
	],
  imports: [
    CommonModule,
    PointsRoutingModule
  ]
})
export class PointsModule { }
