import { IHero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _obj: IHero ;

  // @Input() hero: IHero ;
  @Input() set hero(obj: IHero) {
    this._obj = obj.name ? obj : { name: '<no name set>' } as IHero;
  }
  get hero(): IHero {
    return this._obj;
  }

  @Input() masterName: string;

  constructor() { }

  ngOnInit(): void {
  }



}
