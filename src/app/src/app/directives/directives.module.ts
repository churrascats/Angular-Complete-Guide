import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StructuralDirectiveNgifComponent } from './structural-directive-ngif/structural-directive-ngif.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StructuralDirectiveSwitchcaseComponent } from './structural-directive-switchcase/structural-directive-switchcase.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HighlightHostListenerDirective } from './attribute-directive/highlightHostListener.directive';
import { HighlightHostBindingDirective } from './attribute-directive/highlight-host-binding.directive';

@NgModule({
  declarations: [
    StructuralDirectiveNgifComponent,
    StructuralDirectiveSwitchcaseComponent,
    AttributeDirectiveComponent,
    HighlightHostListenerDirective,
    HighlightHostBindingDirective
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    StructuralDirectiveNgifComponent,
    StructuralDirectiveSwitchcaseComponent,
    AttributeDirectiveComponent
  ],
})
export class DirectivesModule {}
