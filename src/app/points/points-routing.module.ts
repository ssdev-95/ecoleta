import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PointsListComponent } from './list/list.component';
import { NewPointComponent } from './new/new.component';

const routes: Routes = [{
	path: '',
	component: PointsListComponent
}, {
	path: 'new',
	component: NewPointComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
