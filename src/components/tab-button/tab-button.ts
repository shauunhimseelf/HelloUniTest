import { Component, Input, Output, EventEmitter } from '@angular/core';
/*
  Generated class for the TabButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'tab-button',
  templateUrl: 'tab-button.html',
})
export class TabButtonComponent {

  @Input('text') textToUse;

  @Output()
  tabPressed:EventEmitter<string> = new EventEmitter();

  buttonText: string;
  buttonClasses: string;
  buttonIcon: string;

  selected: boolean;

  constructor() {
    this.buttonText = 'Button';
    this.buttonIcon = "add";
    this.selected = false;
  }

  ngAfterViewInit() {
    this.buttonText = this.textToUse;
  }

  buttonToggle( evt ) {
    this.selected = !this.selected;
    this.tabPressed.emit(this.buttonText);
  }

}
