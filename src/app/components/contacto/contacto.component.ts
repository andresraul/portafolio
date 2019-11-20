import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;

  get name() {
    return this.contactoForm.get('name');
  }

  get email() {
    return this.contactoForm.get('email');
  }

  get body() {
    return this.contactoForm.get('body');
  }

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.contactoForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        this.emptyField
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(emailPattern),
        this.emptyField
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        this.emptyField
      ])]
    });
  }

  onSubmit(form: FormGroup) {

    if(form.invalid) {
      return;
    }

    console.log(form.value);
  }

  emptyField(control: FormControl): {[s: string]: boolean} {
    let space = control.value;
    if (control.value) {
      space = control.value.trim().length;
    }
    if (space === 0) {
  return {vacio: true};
  } else {
    return null;
  }

  }

}
