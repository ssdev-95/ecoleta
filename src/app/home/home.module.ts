import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule],
	bootstrap: [HomeComponent]
})
export class HomeModule {
	title = 'Home | Ecoleta'
}
