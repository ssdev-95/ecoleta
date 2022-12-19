import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService extends FormGroup {
	//private formGroup:FormGroup = {} as FormGroup

  constructor() {
		const formControl = {
			name: new FormControl('name'),
			email: new FormControl('email'),
			whatsapp: new FormControl('whatsapp'),
			street: new FormControl('street'),
			number: new FormControl('number'),
			city: new FormControl('city'),
			state: new FormControl('state'),
			picture: new FormControl('picture')
		}

		super(formControl)
		return this
	}
}
