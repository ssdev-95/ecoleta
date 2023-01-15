import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Input() showLogo:boolean = true
}
