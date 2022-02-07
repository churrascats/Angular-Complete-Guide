import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoursesModule } from './src/app/components/courses/courses.module'
import { DataBindingModule } from './src/app/components/data-binding/data-binding.module'
import { DirectivesModule } from './src/app/components/directives/directives.module'
import { DataSharingModule } from './src/app/components/data-sharing/data-sharing.module'
import { SharedModuleModule } from './src/app/shared/shared-module.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoursesModule,
    DataBindingModule,
    DataSharingModule,
    DirectivesModule,
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
