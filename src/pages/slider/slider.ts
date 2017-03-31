import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {

  private userDetails : Object;

  @ViewChild(Slides) slides: Slides;

  constructor() {

  }

  ngAfterViewInit() {
    this.slides.onlyExternal = true;
  }

  signupSubmitted( evt ) {
    console.log(evt);
    this.slides.slideTo(1, 500);
  }

  aboutSubmitted( evt ) {
    this.slides.slideTo(2, 500);
  }

  resetSubmitted( evt ) {
    this.slides.slideTo(0, 100);
  }

}
