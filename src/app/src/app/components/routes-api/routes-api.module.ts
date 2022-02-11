import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouteChildParamComponent } from './route-child-param/route-child-param.component'
import { RouteChildQueryParamComponent } from './route-child-query-param/route-child-query-param.component'
import { RouteParentComponent } from './route-parent/route-parent.component'
import { FormsModule } from '@angular/forms'
import { SharedModuleModule } from '../../shared/shared-module.module'

@NgModule({
  declarations: [
    RouteChildParamComponent,
    RouteChildQueryParamComponent,
    RouteParentComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModuleModule],
  exports: [
    RouteChildParamComponent,
    RouteChildQueryParamComponent,
    RouteParentComponent,
  ],
})
export class RoutesApiModule {}
