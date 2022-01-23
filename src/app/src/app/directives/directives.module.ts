import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StructuralDirectiveNgifComponent } from './structural-directive-ngif/structural-directive-ngif.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [StructuralDirectiveNgifComponent],
  imports: [CommonModule, NgbModule],
  exports: [StructuralDirectiveNgifComponent],
})
export class DirectivesModule {}
