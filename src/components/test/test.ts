import { Component, Input } from '@angular/core';

/*
  Generated class for the Test component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'test',
  templateUrl: 'test.html'
})
export class TestComponent {

  @Input('text') textToUse;

  text: string;

  ngAfterViewInit() {
    this.text = this.textToUse;
  }

  constructor() {
    console.log('Hello Test Component');
    this.text = 'Hello World';
  }

}
