import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name: string;
  @Output() vote = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit(): void {
  }

  doVote(agreed: boolean) {
    this.vote.emit(agreed);
    this.didVote = true;
  }

}
