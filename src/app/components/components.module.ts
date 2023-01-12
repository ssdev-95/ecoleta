import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '@providers/form.service';

import {
	LoaderComponent
} from './loader/loader.component';

import {
	HeadingComponent
} from './heading/heading.component';

import {
	DynamicTemplateDirective
} from '@directives/dynamic-template.directive';

import {
	CategoryButtonComponent
} from './category-button/category-button.component';

import { InputComponent } from './input/input.component';
import { MapComponent } from './map/map.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
		DynamicTemplateDirective,
		CategoryButtonComponent,
		LoaderComponent,
		HeadingComponent,
		TextComponent,
		InputComponent,
		MapComponent
	],
  imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [
		DynamicTemplateDirective,
		CategoryButtonComponent,
		LoaderComponent,
		HeadingComponent,
		TextComponent,
		InputComponent,
		MapComponent
	],
	providers: [FormService]
})
export class ComponentsModule { }
