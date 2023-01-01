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

	selectors:Selectors = { uf:[], city:[] }
	cityControl = new FormControl('')
	ufControl = new FormControl('')

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
			})
	}

	ngOnDestroy() {
		this.selectorsSubscription?.unsubscribe()
	}
}
