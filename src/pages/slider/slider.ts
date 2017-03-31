import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {

  @ViewChild(Slides) slides: Slides;

  constructor() {

  }

  ngAfterViewInit() {
    this.slides.onlyExternal = true;
  }

  signupSubmitted( evt ) {
    this.slides.slideTo(1, 500);
  }

  aboutSubmitted( evt ) {
    this.slides.slideTo(2, 500);
  }

  resetSubmitted( evt ) {
    this.slides.slideTo(0, 100);
  }

}
