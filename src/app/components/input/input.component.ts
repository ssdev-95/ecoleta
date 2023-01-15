import { Component, Input } from '@angular/core';

import {
	ControlContainer,
	FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'ec-input',
  templateUrl: './input.component.html',
	viewProviders: [{
		provide: ControlContainer,
		useExisting: FormGroupDirective
	}]
})
export class InputComponent {
	@Input() name:string = ''
	@Input() invalid:boolean = false
}
