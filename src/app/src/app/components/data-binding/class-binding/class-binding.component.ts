import { Component, OnInit } from '@angular/core'
import { ClassBindingService } from './class-binding.service.service'

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss'],
})
export class ClassBindingComponent implements OnInit {
  classes: string[]

  constructor(classBindingService: ClassBindingService) {
    this.classes = classBindingService.getClasses()
  }

  ngOnInit(): void {}
}
