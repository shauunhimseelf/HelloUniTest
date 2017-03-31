import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor() {

  }

  @Output()
  aboutSubmitted:EventEmitter<string> = new EventEmitter();

  submitAbout() {
    this.aboutSubmitted.emit('aboutSubmitted');
  }

}
