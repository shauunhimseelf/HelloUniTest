import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  private signup : FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.signup = this.formBuilder.group({
      name: ['', Validators.required, ],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      current_school: ['', Validators.required],
      current_major: ['', Validators.required],
      current_gpa: ['', Validators.required]
    })
  }

  logSignup() {
    console.log(this.signup.value);
  }

  @Output()
  signupSubmitted:EventEmitter<string> = new EventEmitter();

  submitSignup() {
    this.signupSubmitted.emit('signupSubmit');
  }

}
