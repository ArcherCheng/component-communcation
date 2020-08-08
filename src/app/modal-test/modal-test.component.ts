import { ModalBoxService } from './../modal/modal-box/modal-box.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
export class ModalTestComponent implements OnInit {
  tableNoList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  peoplesList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 50];

  constructor(
    private modalBoxService: ModalBoxService
  ) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalBoxService.open(id);
  }

  clickTable(data: string) {
    console.log(data);
    this.modalBoxService.close('tableNo');
  }

  clickPeoples(data: string) {
    console.log(data);
    this.modalBoxService.close('peoples');
  }


}
