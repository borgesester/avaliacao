import { TestBed } from '@angular/core/testing';

import { AlertModalService } from './alert-modal.service';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('AlertModalService', () => {
  let service: AlertModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ]
    });
    service = TestBed.inject(AlertModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
