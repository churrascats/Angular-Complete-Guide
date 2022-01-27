import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appHighlightHostBinding]',
})
export class HighlightHostBindingDirective {
  @Input('appHighlightHostBinding') color: string = ''

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  changeBackgroundColor(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color,
    )
  }

  @HostListener('mouseleave')
  returnToDefaultBackgroudnColor(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'grey',
    )
  }
}
