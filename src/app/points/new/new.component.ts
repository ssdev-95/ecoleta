import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import  * as Leaflet from 'leaflet';

import { categs } from '@app/app.component';

import {
	MapService
} from '@providers/map.service';

import {
	FormService
} from '@providers/form.service';

import {
	HttpService,
	PlaceProperty
} from '@providers/http.service';

@Component({
  selector: 'app-new-point',
  templateUrl: './new.component.html'
})
export class NewPointComponent {
	constructor(
		private mapService: MapService,
		private httpClient: HttpService,
		public form: FormService
	) {}

	markSubscription:Subscription = {} as Subscription
	registrationSubscription:Subscription|undefined
	formSubscription:Subscription = this
	  .form
		.valueChanges
		.subscribe()

	place:PlaceProperty = {} as PlaceProperty
	categs:{ text: string; src: string; }[] = []

	handleSubmit() {
		this.registrationSubscription = this
		  .form
			.submit(this.mapService.coords as number[])
			.subscribe()
	}

	ngOnInit() {
		this.categs = categs

		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((loc) => {
				const { latitude, longitude } = loc.coords

				const coords:Leaflet.LatLngExpression = [
					latitude,
					longitude
				]
				this.mapService.bootstrap(coords)
				this.mapService.addMarker(coords)
				this.mapService.coords = coords

			  this.markSubscription = this
				  .httpClient
					.getReverseGeolocation({
						lat: latitude,
						long: longitude
					}).subscribe(place => {
						this.place = place.features[0].properties
						this.form.patchValue({
							city: this.place.city,
							state: this.place.county,
							street: this.place.street,
							number: this.place.housenumber
						},{ emitEvent: true, onlySelf: true })
					})

				this.mapService?.map?.on('click', (event) => {
					this
					  .httpClient
						.unsubscribe(this.markSubscription)

					const { lat, lng } = event.latlng
					this.mapService.coords = [lat,lng]
					this.mapService.removeMarker()
					this.mapService.addMarker([lat,lng])

					this.markSubscription = this
					  .httpClient
						.getReverseGeolocation({
							lat: lat, long: lng
						}).subscribe(place => {
							this.place = place.features[0].properties
							this.form.patchValue({
								city: this.place.city,
								state: this.place.county,
								street: this.place.street,
								number: this.place.housenumber
							},{ emitEvent: true, onlySelf: true })
						})
				})
			})
		} else {
			this.mapService.bootstrap()
			this.mapService.addMarker()
			this.httpClient.getReverseGeolocation({
				lat: 0,
				long: 0
			})
		}

		//TODO: Connect to the API and save new point from form
	}

	ngOnDestroy() {
		this.httpClient.unsubscribe(this.markSubscription)
		this.formSubscription.unsubscribe()
		this.registrationSubscription?.unsubscribe()
	}
}
