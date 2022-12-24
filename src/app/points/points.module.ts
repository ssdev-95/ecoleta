import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PointsRoutingModule } from './points-routing.module';
import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';
import { HttpService } from './http.service';
import { FormService } from './form.service';
import { DetailedComponent } from './detailed/detailed.component';

@NgModule({
  declarations: [
		PointsListComponent,
		NewPointComponent,
		DetailedComponent,
		MapComponent
	],
  imports: [
    CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
    PointsRoutingModule
  ],
	providers: [
		MapService,
		HttpService,
		FormService
	]
})
export class PointsModule { }
