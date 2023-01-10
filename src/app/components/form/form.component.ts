import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@providers/form.service';

@Component({
  selector: 'ec-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
	constructor(private form: FormService) {}
	
	@Input() isSubmiting:boolean = false
	@Input() imagePreview: string = ''
	@Output() onSubmit?: () => void
	@Output() onImageChange?: (event:Event) => void
}
