import { ModalBoxComponent } from './modal/modal-box/modal-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChild2Component } from './hero-child2/hero-child2.component';
import { HeroParent2Component } from './hero-parent2/hero-parent2.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownParent2Component } from './countdown-parent2/countdown-parent2.component';
import { MissionComponent } from './mission/mission.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { ModalTestComponent } from './modal-test/modal-test.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroChildComponent,
      HeroParentComponent,
      HeroChild2Component,
      HeroParent2Component,
      VoterComponent,
      VoteTakerComponent,
      CountdownTimerComponent,
      CountdownParentComponent,
      CountdownParent2Component,
      MissionComponent,
      AstronautComponent,
      ModalTestComponent,
      ModalBoxComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
