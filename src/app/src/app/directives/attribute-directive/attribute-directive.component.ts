import { Component, OnInit } from '@angular/core'
import { AttributeDirectiveService } from './attribute-directive.service'

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss'],
})
export class AttributeDirectiveComponent implements OnInit {
  colors: string[] = []
  selectedColor: string = '#003366'

  constructor(private attributeDirectiveService: AttributeDirectiveService) {
    this.colors = attributeDirectiveService.getColors()
  }

  ngOnInit(): void {}

  setColor(event: any) {
    this.selectedColor = event.value
  }
}
