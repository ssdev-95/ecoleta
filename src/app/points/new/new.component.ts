import { Component } from '@angular/core';
import  * as Leaflet from 'leaflet';
import { categs } from '../../app.component';
import {MapService} from '../map/map.service';

@Component({
  selector: 'app-new-point',
  templateUrl: './new.component.html'
})
export class NewPointComponent {
	constructor(private mapService: MapService) {}

	coords:Leaflet.LatLngExpression = [0,0]
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

				this.mapService.map?.on('click', (event) => {
					const { lat, lng } = event.latlng
					this.mapService.coords = [lat,lng]
					this.mapService.removeMarker()
					this.mapService.addMarker([lat,lng])
				})
			})
		}

		//TODO: Connect to the API and save new point from form
	}
}
