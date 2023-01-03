import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '@providers/http.service';
import { MapService } from '@providers/map.service';
import { categs } from '@app/app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'points-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class PointsListComponent {
	constructor(
		private route: ActivatedRoute,
		private mapService: MapService,
		private httpClient: HttpService
	) { }

	citiesSubscription:Subscription|undefined

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
		this.route.queryParams.subscribe(params => {
			const city = params['city']
			this.citiesSubscription = this
			  .httpClient
				.getMarksByLocation({city})
				.subscribe((marks:any) => {
					this
					  .mapService
						.bootstrap(
							marks[0]?.coords.split(',').map(Number)
						)

					marks.forEach((mark:any) => {
						this.mapService.addMarker(
							mark.coords.split(',').map(Number),
							`<a
							  class="text-zinc-300"
								href="/points/${mark.id}"
							>
							  <strong class="text-blue-900">
								  ${mark.name}
								</strong>
								<br/>${mark.coords}
							</a>`
						)
					})
				})
		})
	}

	ngOnDestroy() {
		this.citiesSubscription?.unsubscribe()
	}
}
