import { Component } from '@angular/core';

export const categs = [
	{ text:'Bulbs' },
	{ text:'Batteries' },
	{ text:'Paper' },
	{ text:'Eletronics' },
	{ text:'Organics' },
	{ text:'Oil' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'ecoleta';
}
