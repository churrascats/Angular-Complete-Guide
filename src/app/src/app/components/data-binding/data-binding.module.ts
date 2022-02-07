import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './event-binding/modal/modal.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ClassBindingComponent, EventBindingComponent, ModalComponent, TwoWayDataBindingComponent],
  imports: [CommonModule, NgbModule, FormsModule],
  exports: [ClassBindingComponent, EventBindingComponent, TwoWayDataBindingComponent]
})
export class DataBindingModule {}
