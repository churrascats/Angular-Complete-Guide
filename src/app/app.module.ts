import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoursesModule } from './src/app/courses/courses.module'
import { DataBindingModule } from './src/app/data-binding/data-binding.module';
import { ParentComponentComponent } from './src/app/data-sharing/parent-component/parent-component.component';
import { ChildComponentComponent } from './src/app/data-sharing/child-component/child-component.component';
import { NgIfComponent } from './src/app/structural-directives/ng-if/ng-if.component'

@NgModule({
  declarations: [AppComponent, ParentComponentComponent, ChildComponentComponent, NgIfComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CoursesModule, DataBindingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
