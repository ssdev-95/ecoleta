import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	DetailedComponent
} from './detailed/detailed.component';

import {
	PointsListComponent
} from './list/list.component';

import {
	NewPointComponent
} from './new/new.component';

const routes: Routes = [{
	path: '',
	component: PointsListComponent
}, {
	path: 'new',
	component: NewPointComponent
}, {
	path: ':id',
	component: DetailedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
