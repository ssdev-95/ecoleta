import { Component } from '@angular/core';
import { categs } from '../../app.component'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: []
})
export class MapComponent {
	categs: {text:string}[] = []

	ngOnInit() {
		console.log('Mounted')
		this.categs = categs
	}
}
