import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  labels = ['Out-going', 'Reserved', 'Sporty', 'Routine', 'Flexible', 'Neutral'];
  lifestyles = ['Fast', 'Party', 'Quiet', 'Posh', 'Budget', 'Neutral'];

  constructor() {

  }

  @Output()
  aboutSubmitted:EventEmitter<string> = new EventEmitter();

  submitAbout() {
    this.aboutSubmitted.emit('aboutSubmitted');
  }

}
