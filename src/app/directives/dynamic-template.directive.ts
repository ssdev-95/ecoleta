import { Directive, Input, AfterViewChecked, TemplateRef,  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[as]'
})
export class DynamicTemplateDirective implements AfterViewChecked {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcf: ViewContainerRef,
  ) { }

  private _needUpdate: boolean = false
	private _tag:string = ''
	private _content:string = ''
	private _classes:DOMTokenList = {} as DOMTokenList

	@Input('as')
	set tag(tagName:string) {
		this._tag = tagName
		this._needUpdate = true
		this.vcf.clear()

	  let template = this
		  .templateRef
			.elementRef
			.nativeElement

		this.vcf.createEmbeddedView(this.templateRef)

		this._content = template
		  .previousElementSibling
			.querySelector('span')
			.innerText

		this._classes = template
		  .previousElementSibling
			.querySelector('span')
			.classList
		
		this.templateRef.elementRef.nativeElement
		  .previousElementSibling
			.removeChild(template.previousElementSibling.querySelector('span'))
	}

	ngAfterViewChecked() {
		if(this._needUpdate) {
			this._updateTemplate()
			this._needUpdate = false
		}
	}

	private _updateTemplate() {
		let r = document.createElement(this._tag)
		r.innerText = this._content
		r.setAttribute('class', this._classes.toString())

	  let sibling = this
		  .templateRef
			.elementRef
			.nativeElement
			.previousElementSibling

		sibling.innerHTML = ''
		sibling.appendChild(r)
	}
}
