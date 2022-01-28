import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[ngElse]',
})
export class NgElseDirective {
  private _hasView: boolean = false

  @Input() set ngElse(condition: boolean) {
    if (!condition && !this._hasView) {
      this._hasView = true
      this._viewContainer.createEmbeddedView(this._template)
    } else if (condition && this._hasView) {
      this._hasView = false
      this._viewContainer.clear()
    }
  }

  constructor(
    private _viewContainer: ViewContainerRef,
    private _template: TemplateRef<any>,
  ) {}
}
