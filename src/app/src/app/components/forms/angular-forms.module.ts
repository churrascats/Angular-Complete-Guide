import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataDrivenFormComponent } from './data-driven-form/data-driven-form.component'
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [DataDrivenFormComponent, TemplateDrivenFormComponent],

  imports: [CommonModule, FormsModule],
  exports: [DataDrivenFormComponent, TemplateDrivenFormComponent],
})
export class AngularFormsModule {}
