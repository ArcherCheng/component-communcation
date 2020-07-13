import { HEROES } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  heroes = HEROES;
  master = 'master';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.master = this.master + '1';
    const name = new Date();
    this.heroes.push({name: name.toString()});
  }


}
