import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor() {

  }

  @Output()
  signupSubmitted:EventEmitter<string> = new EventEmitter();

  submitSignup() {
    this.signupSubmitted.emit('signupSubmit');
  }

}
