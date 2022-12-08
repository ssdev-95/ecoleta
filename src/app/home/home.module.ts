import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
	bootstrap: [HomeComponent]
})
export class HomeModule {
	title = 'Home | Ecoleta'
}
