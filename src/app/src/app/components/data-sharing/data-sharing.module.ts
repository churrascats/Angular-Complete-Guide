import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ParentComponentComponent } from './parent-component/parent-component.component'
import { ChildComponentComponent } from './child-component/child-component.component'
import { NgContentParentComponent } from './ng-content/ng-content-parent/ng-content-parent.component'
import { NgContentChildComponent } from './ng-content/ng-content-child/ng-content-child.component'

@NgModule({
  declarations: [
    ParentComponentComponent,
    ChildComponentComponent,
    NgContentParentComponent,
    NgContentChildComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    ParentComponentComponent,
    ChildComponentComponent,
    NgContentParentComponent,
    NgContentChildComponent,
  ],
})
export class DataSharingModule {}
