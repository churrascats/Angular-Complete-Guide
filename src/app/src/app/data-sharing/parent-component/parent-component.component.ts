import { Component, OnInit } from '@angular/core'
import { Response } from '../child-component/child-component.model'
import { operators } from './parent-component.model'

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {
  total: number = 0
  defaultChildNumber: number = 10
  defaultChildOperation: operators = operators.MULT
  constructor() {}

  ngOnInit(): void {}

  getDataFromChild = (event: Response) => {
    const operations: { [key: string]: Function } = {
      sum: () => {
        this.total -= -event.value
      },
      sub: () => {
        this.total -= event.value
      },
      mult: () => {
        this.total *= event.value
      },
      div: () => {
        this.total /= event.value
      },
    }

    operations[event.operator]()
  }
}
