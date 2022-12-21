import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import  * as Leaflet from 'leaflet';

import { categs } from '../../app.component';
import { MapService } from '../map/map.service';
import { FormService } from '../form.service';

import {
	HttpService,
	PlaceProperty
} from '../http.service';

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
	formSubscription:Subscription = this
	  .form
		.valueChanges
		.subscribe()

	coords:Leaflet.LatLngExpression = [0,0]
	place:PlaceProperty = {} as PlaceProperty
	categs: {text:string,src:string}[] = []                 
	selectedCategs:string[] = []

	selectCateg(categ:string) {                     
		if(this.selectedCategs.includes(categ)) {           
			this.selectedCategs = this.selectedCategs.filter(item => item !== categ)

			return
		}

		this.selectedCategs.push(categ)
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

			  this.markSubscription = this
				  .httpClient
					.getReverseGeolocation({
						lat: latitude,
						long: longitude
					}).subscribe(place => {
						this.place = place.features[0].properties
					})

				this.mapService.map?.on('click', (event) => {
					const { lat, lng } = event.latlng
					this.mapService.coords = [lat,lng]
					this.mapService.removeMarker()
					this.mapService.addMarker([lat,lng])
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
	}
}
