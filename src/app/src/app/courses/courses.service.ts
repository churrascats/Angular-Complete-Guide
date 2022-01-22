import { Injectable } from '@angular/core';
import { Course } from './courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() :Course[]  {
    return [
      { title: 'Course 1', description: 'This is Course 1' },
      { title: 'Course 2', description: 'This is Course 2' },
      { title: 'Course 3', description: 'This is Course 3' },
    ]
  }
}
