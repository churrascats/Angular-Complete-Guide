import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoursesModule } from './src/app/courses/courses.module'
import { DataBindingModule } from './src/app/data-binding/data-binding.module'
import { DirectivesModule } from './src/app/directives/directives.module'
import { DataSharingModule } from './src/app/data-sharing/data-sharing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoursesModule,
    DataBindingModule,
    DataSharingModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
