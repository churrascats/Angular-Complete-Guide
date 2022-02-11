import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalData } from './modal-data-model'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public modalData!: ModalData

  constructor(public activeModal: NgbActiveModal) {}
}
