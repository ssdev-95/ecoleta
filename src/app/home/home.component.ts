import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '@providers/http.service';

interface Selectors {
	uf: string[]
	city: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  constructor(
		private httpClient: HttpService,
		private router: Router
	) {}
	selectorsSubscription:Subscription|undefined
	loading:boolean = true
	selectors:Selectors = { uf:[], city:[] }

	cityControl = new FormControl({
		value: '',
		disabled: !this.selectors.city.length
	})
	ufControl = new FormControl({
		value: '',
		disabled: !this.selectors.uf.length
	})

	handleSubmit(ev: Event) {
		ev?.preventDefault()
		const path = `/points?city=${this.cityControl.getRawValue()}&uf=${this.ufControl.getRawValue()}`
		this.router.navigateByUrl(path)
	}

	ngOnInit() {
  	this.selectorsSubscription = this
			.httpClient
			.getCollectorLocationSelectors()
			.subscribe(res => {
				this.selectors = res
				this.cityControl.enable({
					onlySelf:!!res.city.length,
					emitEvent:!!res.city.length
				})
				this.ufControl.enable({
					onlySelf:!!res.uf.length,
					emitEvent:!!res.uf.length
				})

  			setTimeout(() => {
  				this.loading = false
  			}, 2500)
			})
	}

	ngOnDestroy() {
		this.selectorsSubscription?.unsubscribe()
	}
}
