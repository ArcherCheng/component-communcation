import { MissionService } from './../mission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  astronauts = ['Lovell', 'John', 'Will'];
  history: string[] = [];
  missions = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!',
    'Fly to the sun!',
    'Fly to earth!',
  ];
  nextMission = 0;

  constructor(
    private missionService: MissionService
  ) {

  }

  ngOnInit(): void {
    this.missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      }
    );
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announce`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
