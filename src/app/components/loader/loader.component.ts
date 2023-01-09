import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
	@Input() small:boolean = false
}
