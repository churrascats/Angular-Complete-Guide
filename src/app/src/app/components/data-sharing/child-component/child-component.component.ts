import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { OperatorAndCode, Response } from './child-component.model'
import { ChildComponentService } from './child-component.service'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  @ViewChildren('inputRadioContainer', { read: ElementRef })
  inputRadioContainer: QueryList<ElementRef> | undefined

  @ViewChild('numberInput')
  numberInput: ElementRef | undefined

  @Input() defaultNumber: number = 0
  @Input() defaultOperation: string = ''

  @Output() eventEmitter: EventEmitter<any> = new EventEmitter()

  operatorsAndCodes: OperatorAndCode[] | undefined
  response: Response| undefined

  constructor(childComponentService: ChildComponentService) {
    this.operatorsAndCodes = childComponentService.getOperatorsAndCodes()
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const index = this.operatorsAndCodes?.findIndex(
      (element) => element.operator === this.defaultOperation,
    )

    const elementRef = this.inputRadioContainer?.first.nativeElement.children[
      index ?? 0
    ].children[0]

    this.response = { operator: elementRef.value, value: this.defaultNumber }
    elementRef.click()
  }

  checkIfInputIsValid(event: KeyboardEvent): void {
    let inputObject = <HTMLInputElement>event.target

    if (isNaN(parseFloat(inputObject.value))) {
      inputObject.value = '0'
    }
  }

  updateCheckedProperty(event: any): void {
    const elementRef = this.inputRadioContainer?.first.nativeElement.children

    for (let i = 0; i < elementRef.length; i++) {
      elementRef[i].children[0].setAttribute('checked', false)
    }

    event.target.setAttribute('checked', true)
  }

  calculateTotal(): void {
    const elementRef = this.inputRadioContainer?.first.nativeElement.children

    for (let i = 0; i < elementRef.length; i++) {
      if (elementRef[i].children[0].getAttribute('checked') === 'true') {
        this.response = {
          ...this.response,
          value: parseFloat(this.numberInput?.nativeElement.value),
          operator: elementRef[i].children[0].value,
        }
        break
      }
    }

    this.eventEmitter.emit(this.response)
  }
}
