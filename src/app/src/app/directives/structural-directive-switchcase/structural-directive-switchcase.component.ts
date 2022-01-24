import { Component, OnInit } from '@angular/core'
import { StructuralDirectiveSwitchcaseService } from './structural-directive-switchcase.service'

@Component({
  selector: 'app-structural-directive-switchcase',
  templateUrl: './structural-directive-switchcase.component.html',
  styleUrls: ['./structural-directive-switchcase.component.scss'],
})
export class StructuralDirectiveSwitchcaseComponent implements OnInit {
  fruitObject: any
  fruitList: string[] = []

  constructor(
    structuralDirectiveSwitchcaseService: StructuralDirectiveSwitchcaseService,
  ) {
    this.fruitObject = structuralDirectiveSwitchcaseService.getFruitObject()
    this.fruitList = [...Object.keys(this.fruitObject)]
  }

  ngOnInit(): void {}
}
