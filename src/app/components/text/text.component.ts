import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-text',
  templateUrl: './text.component.html'
})
export class TextComponent {
  @Input() class:string = ''
	ngOnInit() {
	}
}
