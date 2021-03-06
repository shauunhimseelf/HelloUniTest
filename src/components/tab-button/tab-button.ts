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
  @Input('icon') iconToUse;
  @Input('selected') isSelected;


  @Output()
  tabPressed:EventEmitter<string> = new EventEmitter();

  buttonText: string;
  buttonClasses: string;
  buttonIcon: string;

  buttonSelected: boolean


  constructor( ) {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.buttonText = this.textToUse;
      this.buttonIcon = this.iconToUse;
      this.buttonSelected = this.isSelected;
    }, 0);

  }

  buttonToggle( evt ) {
    this.tabPressed.emit(this.buttonText);
  }

}
