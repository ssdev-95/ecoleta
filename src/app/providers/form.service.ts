import { Injectable } from '@angular/core';

import {
	FormControl, FormGroup, Validators
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { HttpService } from './http.service';
import { mapFormData } from '@helpers/mapFormToHttpRequest';

@Injectable({
  providedIn: 'root'
})
export class FormService extends FormGroup {
	private _imagePreview:string = ''
	private _imagePreviewSubscription: Subscription|undefined
	private _selectedCategs:string[] = []

  constructor(private httpClient: HttpService) {
		const formControl = {
			name: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required,
				Validators.email
			]),
			whatsapp: new FormControl('', Validators.required),
			street: new FormControl('', Validators.required),
			number: new FormControl('', Validators.required),
			city: new FormControl('', Validators.required),
			state: new FormControl('', Validators.required),
			picture: new FormControl(undefined, Validators.required)
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

	submit(coords:number[]) {
		if(!this.getRawValue().picture) {
			throw Error('No file/image selected')
		}

		return this
		  .httpClient
			.uploadImage(this.getRawValue().picture)
			.subscribe((res) => {
				const { display_url } = res.data

				const formData = mapFormData({
					...this.getRawValue(),
					coords,
					imagePreview: display_url,
					categories: this._selectedCategs
				})

				this.reset()
				this._imagePreview = ''
				this._selectedCategs = []

				this
				 .httpClient
				 .registerNewCollectorPoint(formData)
				 .subscribe(console.log)
			})
	}

	get imagePreview():string {
		return this._imagePreview
	}

	get subscribe() {
		return this._imagePreviewSubscription
	}

	hasCategorySelected() {
		return this._selectedCategs
	}
}
