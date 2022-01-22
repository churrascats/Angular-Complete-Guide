import { Component } from '@angular/core'
import { ModalComponent } from './modal/modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  value : string | undefined

  constructor(private modalService: NgbModal) {}

  triggerAlert(): void {
    const modalRef = this.modalService.open(ModalComponent, { centered: true })
  }

  triggerKeyUp(event: KeyboardEvent): void {
    this.value = (<HTMLInputElement>event.target).value
  }
}
