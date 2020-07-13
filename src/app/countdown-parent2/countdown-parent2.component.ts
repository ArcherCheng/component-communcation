import { CountdownTimerComponent } from './../countdown-timer/countdown-timer.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-countdown-parent2',
  templateUrl: './countdown-parent2.component.html',
  styleUrls: ['./countdown-parent2.component.css']
})
export class CountdownParent2Component implements OnInit, AfterViewInit {
  @ViewChild(CountdownTimerComponent) private timerComponent: CountdownTimerComponent;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  ngOnInit(): void {
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

  seconds() {
    return 0;
  }

}
