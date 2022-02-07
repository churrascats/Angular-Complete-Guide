import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appHighlightHostListener]',
})
export class HighlightHostListenerDirective {
  @Input('appHighlightHostListener') color: string = ''

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') bindingColor: string = ''

  @HostListener('mouseenter')
  changeBackgroundColor(): void {
    this.bindingColor = this.color
  }

  @HostListener('mouseleave')
  returnToDefaultBackgroudnColor(): void {
    this.bindingColor = 'grey'
  }
}
