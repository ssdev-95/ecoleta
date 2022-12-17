import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';

@NgModule({
  declarations: [
		PointsListComponent,
		NewPointComponent,
		MapComponent
	],
  imports: [
    CommonModule,
    PointsRoutingModule
  ],
	providers: [MapService]
})
export class PointsModule { }
