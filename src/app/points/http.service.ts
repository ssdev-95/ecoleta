import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import {
	environment
} from '../../environment/environment';

interface GetMarks {
	lat:number,
	long:number
}

export interface PlaceProperty {
	address_line1:string  // Send as street to backend
	city:string
	county:string         // Send as state to backend

	// Do not send to backend
	street:string
	houseNumber:string
}

interface Place {
	properties: PlaceProperty
}

interface PlaceResponse {
	features: Place[]
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	private baseUrl:string = ''
	private apiKey:string = ''

  constructor(
		private client:HttpClient
	) {
		this.baseUrl = environment.API_URL
		this.apiKey = environment.API_KEY
	}

	getMarks({ lat, long }:GetMarks) {
		const url = `${this.baseUrl}?lat=${lat}&lon=${long}&apiKey=${this.apiKey}`
		return this.client.get<PlaceResponse>(url)
	}

	unsubscribe(subscription:Subscription) {
		subscription.unsubscribe()
	}
}
