import { NgModule } from '@angular/core';

import {
	BrowserModule
} from '@angular/platform-browser';

import {
	AppRoutingModule
} from './app-routing.module';

import { HomeModule } from './home/home.module';
import { PointsModule } from './points/points.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
		PointsModule,
		HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
