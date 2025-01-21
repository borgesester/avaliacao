import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { AlertComponent } from '../components/alert/alert.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}
@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }

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
