import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
	HttpClientModule
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {
	ComponentsModule
} from '@app/components/components.module';

import {
	HttpService
} from '@providers/http.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
		CommonModule,
		ComponentsModule,
		RouterModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [HttpService],
	bootstrap: [HomeComponent]
})
export class HomeModule {
	title = 'Home | Ecoleta'
}
