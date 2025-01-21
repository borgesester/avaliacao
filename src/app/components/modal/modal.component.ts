import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() cancelTxt: string = 'Cancelar';
  @Input() saveTxt: string = 'Salvar';
  confirmResult: Subject<boolean> = new Subject();

  constructor(private bsModalRef: BsModalRef) {}

  confirm() {
    this.confirmAndClose(true);
  }

  onClose(): void {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef?.hide();
  }
}
