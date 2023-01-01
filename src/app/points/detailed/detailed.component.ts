import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '@providers/http.service';

import {
	mapHttpResponse
} from '@helpers/mapHttpCollectorResponse';

interface Collector {
	id:string
	name:string
	categories:string
	city:string
	uf:string
	street:string
	number:number
	whatsapp:string
	email:string
	picture: string
	mapUrl: string
}

type CollectorResponse = Omit<Collector, 'whatsapp'|'number'|'mapUrl'> & {
	whatsapp:number
	coords:string
}

@Component({	
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: []
})
export class DetailedComponent {
	constructor(
		private route: ActivatedRoute,
		private httpClient: HttpService
	) {}
	paramsSubscription:Subscription|undefined
	httpSubscription:Subscription|undefined

  collector:Collector|undefined

	ngOnInit() {
		this.paramsSubscription = this
		  .route
			.params
			.subscribe((params) => {
				this.httpSubscription = this
				  .httpClient
					.getDetailedCollectorById<CollectorResponse>(params['id'])
					.subscribe(res => {
						this.collector = mapHttpResponse(res)
					})
			})
	}

	ngOnDestroy() {
		this.paramsSubscription?.unsubscribe()
		this.httpSubscription?.unsubscribe()
	}
}
