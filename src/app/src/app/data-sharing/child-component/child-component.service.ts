import { Injectable } from '@angular/core'
import { OperatorAndCode } from './child-component.model'

@Injectable({
  providedIn: 'root',
})
export class ChildComponentService {
  constructor() {}

  getOperatorsAndCodes(): OperatorAndCode[] {
    return [
      {
        operator: 'sum',
        code: '+',
      },
      {
        operator: 'sub',
        code: '−',
      },
      {
        operator: 'mult',
        code: '×',
      },
      {
        operator: 'div',
        code: '÷',
      },
    ]
  }
}
