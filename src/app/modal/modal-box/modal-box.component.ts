import { ModalBoxService } from './modal-box.service';
import { Component, OnInit, Input, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ModalBoxComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  isOpen = false;

  constructor(
    private service: ModalBoxService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    if (!this.id) {
      console.log('modal must have an unique id');
      return;
    }

    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'app-modal-box') {
        this.close();
      }
    });

    this.element.style.display = 'none';
    this.service.add(this);
  }

  ngOnDestroy(): void {
    this.service.remove(this.id);
    this.element.remove();
    console.log('ModalBoxComponent.ngOnDestroy');
  }

  open(): void  {
    this.element.style.display = 'block';
    this.isOpen = true;
    document.body.classList.add('app-modal-box-open');
  }

  close(): void {
    this.element.style.display = 'none';
    this.isOpen = false;
    document.body.classList.remove('app-modal-box-open');
  }


}
