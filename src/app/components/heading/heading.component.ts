import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-heading',
	templateUrl: './heading.component.html'
})
export class HeadingComponent {
  @Input() class:string = ''
	ngOnInit() {
	}
}
