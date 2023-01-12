import {
	Component, EventEmitter, Input, Output
} from '@angular/core';

interface Category {
	text:string
	src:string
}

@Component({
  selector: 'ec-category',
  templateUrl: './category-button.component.html'
})
export class CategoryButtonComponent {
  @Input() category:Category = {} as Category
	@Input() active:boolean = false
	@Output() toggle = new EventEmitter<string>()

	handleClick() {
		this.toggle.emit(this.category.text)
	}
}
