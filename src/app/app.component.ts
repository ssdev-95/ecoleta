import { Component } from '@angular/core';

export const categs = [
	{ text:'Bulbs',src:'../../../assets/bulbs.svg' },
	{ text:'Batteries',src:'../../../assets/battery.svg' },
	{ text:'Paper',src:'../../../assets/organincs.svg' },
	{ text:'Eletronics',src:'../../../assets/papers.svg' },
	{ text:'Organics',src:'../../../assets/organincs.svg' },
	{ text:'Oil',src:'../../../assets/oil.svg' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'ecoleta';
}
