import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from '@providers/form.service';

import {
	LoaderComponent
} from './loader/loader.component';

import {
	HeadingComponent
} from './heading/heading.component';

import { TextComponent } from './text/text.component';

import {
	DynamicTemplateDirective
} from '@directives/dynamic-template.directive';

import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';;
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
		DynamicTemplateDirective,
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
		LoaderComponent,
		HeadingComponent,
		TextComponent,
		InputComponent,
		MapComponent
	],
	providers: [FormService]
})
export class ComponentsModule { }
