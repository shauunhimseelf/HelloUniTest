import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


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

  private addCustomLabelForm : FormGroup;
  private addCustomLifestyleForm : FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.addCustomLabelForm = this.formBuilder.group({
      customLabel: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z -]*'), Validators.minLength(3)])]
    })

    this.addCustomLifestyleForm = this.formBuilder.group({
      customLifestyle: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z -]*'), Validators.minLength(3)])]
    })
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

  addCustomLabel( ){
    const arrIndex = this.userLabels.indexOf(this.addCustomLabelForm.value.customLabel);
    if(arrIndex === -1)
    {
      this.userLabels.push( this.addCustomLabelForm.value.customLabel );
    }
    this.addCustomLabelForm.reset();
    console.log(this.userLabels);
  }

  addCustomLifestyle(){
    const arrIndex = this.userLifestyles.indexOf(this.addCustomLifestyleForm.value.customLabel);
    if(arrIndex === -1)
    {
      this.userLifestyles.push( this.addCustomLifestyleForm.value.customLifestyle );
    }
    console.log(this.userLifestyles);
  }

  submitAbout() {
    let obj = {
      label : this.userLabels,
      Lifestyle: this.userLifestyles
    }

    this.aboutSubmitted.emit(obj);
  }

}
