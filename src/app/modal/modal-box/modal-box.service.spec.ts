/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalBoxService } from './modal-box.service';

describe('Service: ModalBox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalBoxService]
    });
  });

  it('should ...', inject([ModalBoxService], (service: ModalBoxService) => {
    expect(service).toBeTruthy();
  }));
});
