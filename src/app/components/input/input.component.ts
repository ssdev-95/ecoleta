	import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
	@Input() classes:string = ''
	@Input() name:string = ''
	@Input() invalid:boolean = false
}
