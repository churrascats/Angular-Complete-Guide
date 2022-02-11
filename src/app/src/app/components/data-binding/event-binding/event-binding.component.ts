import { Component } from '@angular/core'
import { ModalComponent } from '../../../shared/modal/modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalData } from '../../../shared/modal/modal-data-model';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  value : string | undefined

  modalData: ModalData;

  constructor(private modalService: NgbModal) { 
    this.modalData = new ModalData("Hey There", "Event Triggered!");
  }


  triggerAlert(): void {
    const modalRef = this.modalService.open(ModalComponent, { centered: true })

    modalRef.componentInstance.modalData = this.modalData;
  }

  triggerKeyUp(event: KeyboardEvent): void {
    this.value = (<HTMLInputElement>event.target).value
  }
}
