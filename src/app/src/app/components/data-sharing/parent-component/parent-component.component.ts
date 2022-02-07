import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core'
import { Response } from '../child-component/child-component.model'
import { ServiceBroadcastService } from '../service-broadcast.service'
import { operators } from './parent-component.model'

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('initialValue') initialValue: ElementRef | undefined

  total: number = 0
  defaultChildNumber: number = 10
  defaultChildOperation: operators = operators.MULT

  operationString: string = ''

  constructor(
    private _renderer: Renderer2,
    private serviceBroadcast: ServiceBroadcastService,
  ) {}

  ngOnInit(): void {
    this.serviceBroadcast.operationStringEmitter.subscribe((response) => {
      let historyItem = this._renderer.createElement('li')

      this._renderer.setProperty(historyItem, 'innerHTML', response)

      this._renderer.appendChild(this.initialValue?.nativeElement, historyItem)
    })
  }

  ngAfterViewInit(): void {
    this._renderer.setProperty(
      this.initialValue?.nativeElement,
      'innerHTML',
      `Initial Value: ${this.total}`,
    )
  }

  getDataFromChild = (event: Response) => {
    let previousTotal = this.total

    const operations: { [key: string]: Function } = {
      sum: () => {
        this.total += event.value
        this.operationString = `${previousTotal} + ${event.value} = ${this.total}`
      },
      sub: () => {
        this.total -= event.value
        this.operationString = `${previousTotal} - ${event.value} = ${this.total}`
      },
      mult: () => {
        this.total *= event.value
        this.operationString = `${previousTotal} * ${event.value} = ${this.total}`
      },
      div: () => {
        this.total /= event.value
        this.operationString = `${previousTotal} / ${event.value} = ${this.total}`
      },
    }

    operations[event.operator]()
    this.serviceBroadcast.emitOperationString(this.operationString)
  }
}
