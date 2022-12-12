import { Component } from '@angular/core';
import * as Leaf from 'leaflet';

const baseMapTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const defaultMapCenter:Leaf.LatLngExpression = [-3.000000, -59.000000]

@Component({
  selector: 'leaflet-map',
  templateUrl: './map.component.html',
  styleUrls: []
})
export class MapComponent {
	map:Leaf.Map = {} as Leaf.Map

	ngOnInit() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((loc) => {
				const { latitude, longitude } = loc.coords
				const mapCenter:Leaf.LatLngExpression = [latitude, longitude]

				this.map = Leaf
				  .map('leaflet', { trackResize: false })
					.setView(mapCenter, 10)
			})
		} else {
			this.map = Leaf
			  .map('leaflet', { trackResize: false })
				.setView(defaultMapCenter, 10)
		}

		Leaf.tileLayer(baseMapTile, {
			maxZoom: 19,                                        
			attribution: '<a href="https://openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
		}).addTo(this.map)
	}
}
