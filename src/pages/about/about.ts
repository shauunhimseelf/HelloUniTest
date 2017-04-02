import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  labels = ['Out-going', 'Reserved', 'Sporty', 'Routine', 'Flexible', 'Neutral'];
  lifestyles = ['Fast', 'Party', 'Quiet', 'Posh', 'Budget', 'Neutral'];

  // userLabels = ['Test 1', 'Test 2'];
  userLabels = [];
  userLifestyles = [];

  constructor() {

  }

  @Output()
  aboutSubmitted:EventEmitter<Object> = new EventEmitter();

  // TODO Merge handleLabelPressed and handleLifestylePressed functions

  handleLabelPressed( evt ) {

    const labelText = evt;
    const arrIndex = this.userLabels.indexOf(labelText);

    if( arrIndex === -1)
    {
      this.userLabels.push( labelText );
    } else {
      this.userLabels.splice( arrIndex, 1 );
    }

    console.log(this.userLabels);

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

    console.log(this.userLabels);

  }

  removeLabel( evt ) {
    console.log( evt );
  }

  submitAbout() {
    let obj = {
      label : this.userLabels,
      Lifestyle: this.userLifestyles
    }

    this.aboutSubmitted.emit(obj);
  }

}
