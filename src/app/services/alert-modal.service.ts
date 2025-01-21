import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  showConfirm(
    title: string,
    body: string,
    saveTxt?: string,
    cancelTxt?: string
  ) {
    const bsModalRef: BsModalRef = this.modalService.show(
      ModalComponent
    );

    bsModalRef.content.title = title;
    bsModalRef.content.body = body;

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    if (saveTxt) {
      bsModalRef.content.saveTxt = saveTxt;
    }

    return (<ModalComponent>bsModalRef.content).confirmResult;
  }
}
