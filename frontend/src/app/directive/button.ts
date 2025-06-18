import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appButton]'
})


export class Button {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'btn');
  }
}
