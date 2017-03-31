import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {

  constructor() {

  }

  @Output()
  resetSubmitted:EventEmitter<string> = new EventEmitter();

  submitReset() {
    this.resetSubmitted.emit('resetSubmitted');
  }

}
