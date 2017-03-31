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
    this.userDetails = {
      name: "",
      dob: "",
      gender: "",
      nationality: "",
      current_school: "",
      current_major: "",
      current_gpa: "",
      label: [],
      Lifestyle: []
    }

  }

  ngAfterViewInit() {
    this.slides.onlyExternal = true;
  }

  signupSubmitted( evt ) {
    this.slides.slideTo(1, 500);
    this.updateUserDetails(evt);
  }

  aboutSubmitted( evt ) {
    this.slides.slideTo(2, 500);
    this.updateUserDetails(evt);
    console.log(this.userDetails);
  }

  resetSubmitted( evt ) {
    this.slides.slideTo(0, 100);
  }

  updateUserDetails( obj ){
    this.userDetails = Object.assign( obj, this.userDetails );
  }

}
