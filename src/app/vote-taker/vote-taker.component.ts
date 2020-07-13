import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agree = 0;
  disagree = 0;
  voters = ['Narco', 'Celebrity', 'Bomb', 'william', 'Archer'];

  constructor() { }

  ngOnInit(): void {
  }

  onVote(agreed: boolean) {
    agreed ? this.agree++ : this.disagree++;
  }


}
