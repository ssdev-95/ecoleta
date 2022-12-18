import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PointsRoutingModule } from './points-routing.module';
import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
		PointsListComponent,
		NewPointComponent,
		MapComponent
	],
  imports: [
    CommonModule,
		HttpClientModule,
    PointsRoutingModule
  ],
	providers: [
		MapService,
		HttpService
	]
})
export class PointsModule { }
