import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactoForm = this.formBuilder.group({
      name: [''],
      email: [''],
      body: ['']
    });
  }

}
