import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';




@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;

  emailSuccess: any;
  textError: any;

  get name() {
    return this.contactoForm.get('name');
  }

  get email() {
    return this.contactoForm.get('email');
  }

  get body() {
    return this.contactoForm.get('body');
  }

  constructor(public formBuilder: FormBuilder,
              public contactoService: ContactoService) { }

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

    if (form.invalid) {
      return;
    }

    this.contactoService.getAudiovisuales(form.value)
    .subscribe((data: any) => {
      if(data.ok) {
        this.emailSuccess = data.message;
      }
    },
    (err) => {
      console.log(err);
      this.textError = err.error.err.message || 'Error de conección.';
    });
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
