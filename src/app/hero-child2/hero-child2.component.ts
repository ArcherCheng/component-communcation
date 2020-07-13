import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-hero-child2',
  templateUrl: './hero-child2.component.html',
  styleUrls: ['./hero-child2.component.css']
})
export class HeroChild2Component implements OnInit, OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: prefer-const
    let log: string[] = [];

    // tslint:disable-next-line: forin
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  ngOnInit(): void {
  }


}
