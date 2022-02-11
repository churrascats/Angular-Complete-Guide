import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './interpolation/courses.component';
import { SharedModuleModule } from '../../shared/shared-module.module';
@NgModule({
  declarations: [ClassBindingComponent, EventBindingComponent, TwoWayDataBindingComponent, CoursesComponent],
  imports: [CommonModule, SharedModuleModule, NgbModule, FormsModule],
  exports: [ClassBindingComponent, EventBindingComponent, TwoWayDataBindingComponent, CoursesComponent]
})
export class DataBindingModule {}
