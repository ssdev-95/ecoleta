import { Component } from '@angular/core';
import { categs } from '../../app.component';

@Component({
  selector: 'app-new-point',
  templateUrl: './new.component.html'
})
export class NewPointComponent {
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
	}
}
