import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PointsRoutingModule } from './points-routing.module';
import { ComponentsModule } from '@app/components/components.module';
import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';
import { DetailedComponent } from './detailed/detailed.component';

import { MapService } from '@providers/map.service';
import { HttpService } from '@providers/http.service';
import { FormService } from '@providers/form.service';

@NgModule({
  declarations: [
		PointsListComponent,
		NewPointComponent,
		DetailedComponent
	],
  imports: [
    CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		ComponentsModule,
    PointsRoutingModule
  ],
	providers: [
		MapService,
		HttpService,
		FormService
	],
	exports: [FormService]
})
export class PointsModule { }
