import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ClassBindingService {
  constructor() {}

  getClasses(): string[] {
    return ['alert-success', 'alert-info', 'alert-warning', 'alert-danger']
  }
}
