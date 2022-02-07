import { Injectable, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ServiceBroadcastService {
  operationStringEmitter = new EventEmitter<string>()

  constructor() {}

  public emitOperationString(operationString: string) {
    this.operationStringEmitter.emit(operationString)
  }
}
