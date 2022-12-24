import { Component } from '@angular/core';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: []
})
export class DetailedComponent {
	collector = {
		name:'Ecoleta - Zumbi dos Palmares',
		categories:'Eletronics, bulbs, batteries',
		city:'Rio Grande do Sul',
		uf:'Santa Catarina',
		street:'G. Guemballa, Jardim America',
		number:260,
		whatsapp:'https://wa.me/+555555555555',
		email:'mailto://zimu@ecoleta.dev',
		picture:'https://firebasestorage.googleapis.com/v0/b/ecoleta-3718e.appspot.com/o/image_1890e444-696b-40b2-9860-277e58c3b22a20221222_093946.jpg?alt=media&token=fe21cc86-6b23-4102-b78b-b6333a2b6acd'
	}
}
