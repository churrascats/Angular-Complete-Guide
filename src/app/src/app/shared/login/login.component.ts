import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalData } from '../modal/modal-data-model'
import { ModalComponent } from '../modal/modal.component'
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  modalData: ModalData

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
  ) {
    this.modalData = new ModalData(
      'Invalid Credentials',
      'Some field is empty!',
    )
  }

  ngOnInit(): void {}

  validate(): void {
    if (!this.authService.authenticate(this.username, this.password)) {
      console.log(this.modalData);
      const modalRef = this.modalService.open(ModalComponent, {
        centered: true,
      })

      modalRef.componentInstance.modalData = this.modalData
    }
  }
}
