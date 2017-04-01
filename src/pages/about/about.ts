import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  labels = ['Out-going', 'Reserved', 'Sporty', 'Routine', 'Flexible', 'Neutral'];
  lifestyles = ['Fast', 'Party', 'Quiet', 'Posh', 'Budget', 'Neutral'];

  userLabels = [];
  userLifestyles = [];

  constructor() {

  }

  @Output()
  aboutSubmitted:EventEmitter<Array<Array<String>>> = new EventEmitter();

  submitAbout() {
    this.aboutSubmitted.emit([this.userLabels, this.userLifestyles]);
  }

  // TODO Merge functions

  handleLabelPressed( evt ) {

    const labelText = evt;
    const arrIndex = this.userLabels.indexOf(labelText);

    if( arrIndex === -1)
    {
      this.userLabels.push( labelText );
    } else {
      this.userLabels.splice( arrIndex, 1 );
    }

  }

  handleLifestylePressed( evt ) {

    const lifestyleText = evt;
    const arrIndex = this.userLifestyles.indexOf(lifestyleText);

    if( arrIndex === -1)
    {
      this.userLifestyles.push( lifestyleText );
    } else {
      this.userLifestyles.splice( arrIndex, 1 );
    }

  }

}
