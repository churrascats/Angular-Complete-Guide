import { Component, OnInit } from '@angular/core'
import { Course } from './courses.model'
import { CoursesService } from './courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] 

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {
  }
}
