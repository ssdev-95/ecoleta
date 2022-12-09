import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { NewPointComponent } from './new/new.component';

const routes: Routes = [{
	path: '',
	component: MapComponent
}, {
	path: 'new',
	component: NewPointComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
