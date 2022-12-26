import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '@providers/http.service';

import {
	mapHttpResponse
} from 'src/helpers/mapHttpCollectorResponse';
import {ResourcesConfig} from 'eruda';

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

const collector:CollectorResponse = {
	id: '83d8f054-77ad-4973-a11f-da24d3431302',
	name:'Ecoleta - Zumbi dos Palmares',
	categories:'Eletronics, bulbs, batteries',
	city:'Bunzaninho',
	uf:'FFXII',
	street:'G. Guemballa,Jardim America, 260',
	//number:260,
	whatsapp:555555555555,
	email:'mailto://zimu@ecoleta.dev',
	picture:'https://firebasestorage.googleapis.com/v0/b/ecoleta-3718e.appspot.com/o/image_1890e444-696b-40b2-9860-277e58c3b22a20221222_093946.jpg?alt=media&token=fe21cc86-6b23-4102-b78b-b6333a2b6acd',
	//mapUrl: 'https://www.google.com/maps/@'
	coords:'-3.0631812,-59.9370711'
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
		this.collector = mapHttpResponse(collector)
		/*this.paramsSubscription = this
		  .route
			.params
			.subscribe((params) => {
				this.httpSubscription = this
				  .httpClient
					.getDetailedCollectorById<CollectorResponse>(params['id'])
					.subscribe(res => {
						this.collector = mapHttpResponse(res)
					})
			})*/
	}

	/*ngOnDestroy() {
		this.paramsSubscription?.unsubscribe()
		this.httpSubscription?.unsubscribe()
	}*/
}
