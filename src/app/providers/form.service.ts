import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { mapFormData } from '@helpers/mapFormToHttpRequest';

import {
	environment
} from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService extends FormGroup {
	private readonly apiUrl = environment.ECOLETA_API_URL
	private _imagePreview:string = ''
	private _imagePreviewSubscription: Subscription|undefined
	private _selectedCategs:string[] = []

  constructor(private httpClient: HttpClient) {
		const formControl = {
			name: new FormControl(''),
			email: new FormControl(''),
			whatsapp: new FormControl(''),
			street: new FormControl(''),
			number: new FormControl(''),
			city: new FormControl(''),
			state: new FormControl(''),
			picture: new FormControl()
		}

		super(formControl)
		return this
	}
	
	public get selectedCategs() {
		return this._selectedCategs
	}

	selectCateg(categ:string) {
		if(this._selectedCategs.includes(categ)) {
			this._selectedCategs = this._selectedCategs.filter(item => item !== categ)
			return
		}

		this._selectedCategs.push(categ)
	}

	onImageChange(event:Event) {
		const { files } = event.target as HTMLInputElement
		if(!files || files === null) return;

		const file = files[0]
		this.setValue({
			...this.getRawValue(),
			picture: file
		})

		const reader = new FileReader()
		reader.onload = () => {
			this._imagePreview = reader.result?.toString() ?? ''
		}

		reader.readAsDataURL(file)
	}

	submit() {
		if(!this.getRawValue().picture) {
			throw Error('No file/image selected')
		}

		const formData = mapFormData({
			...this.getRawValue(),
			imagePreview: this._imagePreview,
			categories: this._selectedCategs
		})

		console.log(formData)

		this.reset()
		this._imagePreview = ''
		this._selectedCategs = []
	}

	get imagePreview():string {
		return this._imagePreview
	}

	get subscribe() {
		return this._imagePreviewSubscription
	}
}
