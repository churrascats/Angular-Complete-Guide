import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './src/app/components/data-binding/interpolation/courses.component';
import { ClassBindingComponent } from './src/app/components/data-binding/class-binding/class-binding.component';
import { EventBindingComponent } from './src/app/components/data-binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './src/app/components/data-binding/two-way-data-binding/two-way-data-binding.component';
import { NgContentParentComponent } from './src/app/components/data-sharing/ng-content/ng-content-parent/ng-content-parent.component';
import { ParentComponentComponent } from './src/app/components/data-sharing/parent-component/parent-component.component';
import { AttributeDirectiveComponent } from './src/app/components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveNgifComponent } from './src/app/components/directives/structural-directive-ngif/structural-directive-ngif.component';
import { StructuralDirectiveSwitchcaseComponent } from './src/app/components/directives/structural-directive-switchcase/structural-directive-switchcase.component';
import { RouteParentComponent } from './src/app/components/routes-api/route-parent/route-parent.component';
import { LoginComponent } from './src/app/shared/login/login.component';

const routes: Routes = [
  {path: "interpolation", component: CoursesComponent},
  {path: "class-binding", component: ClassBindingComponent},
  {path: "event-binding", component: EventBindingComponent},
  {path: "two-way-data-binding", component: TwoWayDataBindingComponent},
  {path: "data-sharing-1", component: ParentComponentComponent},
  {path: "data-sharing-2", component: NgContentParentComponent},
  {path: "structural-directive-ngif", component: StructuralDirectiveNgifComponent},
  {path: "structural-directive-ngswithcase", component: StructuralDirectiveSwitchcaseComponent},
  {path: "attribute-directive", component: AttributeDirectiveComponent},
  {path: "route-api", component: RouteParentComponent},
  {path: "route-api/:id/:name", component: RouteParentComponent},
  {path: "", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
