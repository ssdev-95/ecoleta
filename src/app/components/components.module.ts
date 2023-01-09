import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
		DynamicTemplateDirective,
		LoaderComponent,
		HeadingComponent,
		TextComponent,
		InputComponent
	],
  imports: [CommonModule],
	exports: [
		DynamicTemplateDirective,
		LoaderComponent,
		HeadingComponent,
		TextComponent,
		InputComponent
	]
})
export class ComponentsModule { }
