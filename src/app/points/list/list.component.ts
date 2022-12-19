import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from '../map/map.service';
import { categs } from '../../app.component';

@Component({
  selector: 'points-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class PointsListComponent {
	constructor(
		private route: ActivatedRoute,
		private mapService: MapService
	) { }

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
		//TODO: Use route city params to fetch points to mark in the map
		this.route.queryParams.subscribe(params => {
			console.log(params['city'])
			this.mapService.bootstrap()
		})
	}
}
