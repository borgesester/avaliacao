import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() message = '';
  @Input() type = 'warning';

  constructor(public bsModalRef: BsModalRef) {}

  onClose() {
    this.bsModalRef.hide();
  }
}
