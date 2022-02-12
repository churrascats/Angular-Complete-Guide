import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CoursesComponent } from './src/app/components/data-binding/interpolation/courses.component'
import { ClassBindingComponent } from './src/app/components/data-binding/class-binding/class-binding.component'
import { EventBindingComponent } from './src/app/components/data-binding/event-binding/event-binding.component'
import { TwoWayDataBindingComponent } from './src/app/components/data-binding/two-way-data-binding/two-way-data-binding.component'
import { NgContentParentComponent } from './src/app/components/data-sharing/ng-content/ng-content-parent/ng-content-parent.component'
import { ParentComponentComponent } from './src/app/components/data-sharing/parent-component/parent-component.component'
import { AttributeDirectiveComponent } from './src/app/components/directives/attribute-directive/attribute-directive.component'
import { StructuralDirectiveNgifComponent } from './src/app/components/directives/structural-directive-ngif/structural-directive-ngif.component'
import { StructuralDirectiveSwitchcaseComponent } from './src/app/components/directives/structural-directive-switchcase/structural-directive-switchcase.component'
import { RouteParentComponent } from './src/app/components/routes-api/route-parent/route-parent.component'
import { LoginComponent } from './src/app/shared/login/login.component'
import { AuthGuard } from './src/app/guards/auth.guard'

const routes: Routes = [
  {
    path: 'interpolation',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'class-binding',
    component: ClassBindingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'two-way-data-binding',
    component: TwoWayDataBindingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'data-sharing-1',
    component: ParentComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'data-sharing-2',
    component: NgContentParentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'structural-directive-ngif',
    component: StructuralDirectiveNgifComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'structural-directive-ngswithcase',
    component: StructuralDirectiveSwitchcaseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'route-api',
    component: RouteParentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'route-api/:id/:name',
    component: RouteParentComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
