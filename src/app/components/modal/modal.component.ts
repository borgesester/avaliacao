import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() body: string;
  @Input() button: string;
  @Output() action = new EventEmitter()
  $result: Subject<boolean>


  setAction() {
    this.action.emit(this.$result.next(true))
  }
}
