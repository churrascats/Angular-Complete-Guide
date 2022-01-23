import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ParentComponentComponent } from './parent-component/parent-component.component'
import { ChildComponentComponent } from './child-component/child-component.component'

@NgModule({
  declarations: [ParentComponentComponent, ChildComponentComponent],
  imports: [CommonModule, NgbModule],
  exports: [ParentComponentComponent, ChildComponentComponent],
})
export class DataSharingModule {}
