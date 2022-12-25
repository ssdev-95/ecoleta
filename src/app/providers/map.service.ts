import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';

export interface MapBootstrapOptions {
	root: string
	coords: Leaflet.LatLngExpression
}

export interface MapMarkPopupProps {
	marker: Leaflet.Marker,
	content: string
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
	private readonly tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	private readonly attribution = '<a href="https://openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
	private _map: Leaflet.Map = {} as Leaflet.Map
	private _coords:Leaflet.LatLngExpression|null = null

	private marker:Leaflet.Marker = {} as Leaflet.Marker

	bootstrap(
		coords:Leaflet.LatLngExpression=[0,0],
		root:string='leaflet',
	) {
		this._map = Leaflet
		  .map(root, { trackResize: false })
			.setView(coords, 15)

		this._coords = coords

		Leaflet.tileLayer(this.tiles, {
			maxZoom: 18,
			attribution: this.attribution
		}).addTo(this._map)
	}

	addMarker(coords:Leaflet.LatLngExpression=[0,0], popoupContent?:string) {
		const marker = Leaflet
		  .marker(coords, { icon: new Leaflet.Icon({
				iconUrl: '../../assets/map-pin.svg',
				iconSize: [45,45],
				iconAnchor: [22,45],
				shadowUrl: '../../assets/map-pin-shadow.svg',
				shadowSize: [45,45],
				shadowAnchor: [10,40]
			}) })
			.addTo(this._map)

		this.addPopup({
			marker,
			content: popoupContent ?? `
			  <strong>New collector point at</strong><br/>
				${coords.toString()}
			`
		})

		this.marker = marker
	}

	removeMarker() {
		if(!Object.keys(this.marker).length) return;
		this.marker.remove()
	}

	addPopup({ marker, content }:MapMarkPopupProps) {
		marker.bindPopup(content)
	}

	public get map() {
		if(!Object.values(this._map)) return null;

		return this._map
	}

	set coords(coords:Leaflet.LatLngExpression|null) {
		this._coords = coords
	}

	get coords():Leaflet.LatLngExpression|null {
		return this._coords
	}
}
