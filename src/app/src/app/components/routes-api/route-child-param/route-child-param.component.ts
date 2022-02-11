import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalData } from '../../../shared/modal/modal-data-model';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { RouteChild } from '../route-child-interface';

@Component({
  selector: 'app-route-child-param',
  templateUrl: './route-child-param.component.html',
  styleUrls: ['./route-child-param.component.scss']
})
export class RouteChildParamComponent implements OnInit, RouteChild {

  name: string | undefined
  id: string | undefined

  modalData: ModalData;

  constructor(private modalService: NgbModal, private router: Router) { 
    this.modalData = new ModalData("Hey There", "Please set all parameters before send again");
  }

  ngOnInit(): void {
  }

  sendParams(): void {
    if(this.name && this.id){
      this.router.navigate(['route-api', this.id, this.name])
    }
    else{
      const modalRef = this.modalService.open(ModalComponent, { centered: true })

      modalRef.componentInstance.modalData = this.modalData;
    }

  }

}
