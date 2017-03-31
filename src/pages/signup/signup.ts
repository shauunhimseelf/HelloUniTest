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
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z -]*'), Validators.maxLength(60)])],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      current_school: ['', Validators.required],
      current_major: ['', Validators.required],
      current_gpa: ['', Validators.required]
    })
  }

  @Output()
  signupSubmitted:EventEmitter<Object> = new EventEmitter();

  logSignup() {
    this.signupSubmitted.emit(this.signup.value);
  }

}
