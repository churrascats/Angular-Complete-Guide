import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    CoursesComponent
  ]
})
export class CoursesModule { }
