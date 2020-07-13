import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent2',
  templateUrl: './hero-parent2.component.html',
  styleUrls: ['./hero-parent2.component.css']
})
export class HeroParent2Component implements OnInit {
  major = 1;
  minor = 23;

  constructor() { }

  ngOnInit(): void {
  }

  addMinor() {
    this.minor ++;
  }

  addMajor() {
    this.major ++;
    this.minor = 0;
  }



}
