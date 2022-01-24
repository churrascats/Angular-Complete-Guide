import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StructuralDirectiveNgifComponent } from './structural-directive-ngif/structural-directive-ngif.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StructuralDirectiveSwitchcaseComponent } from './structural-directive-switchcase/structural-directive-switchcase.component'

@NgModule({
  declarations: [StructuralDirectiveNgifComponent, StructuralDirectiveSwitchcaseComponent],
  imports: [CommonModule, NgbModule],
  exports: [StructuralDirectiveNgifComponent, StructuralDirectiveSwitchcaseComponent],
})
export class DirectivesModule {}
