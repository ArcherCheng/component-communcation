import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParent2Component } from './hero-parent2.component';

describe('HeroParent2Component', () => {
  let component: HeroParent2Component;
  let fixture: ComponentFixture<HeroParent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroParent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroParent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
