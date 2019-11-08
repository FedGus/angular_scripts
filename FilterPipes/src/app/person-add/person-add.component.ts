import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  personForm: FormGroup;
  disabledForms = false;
  
  constructor() { 
  }

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required]),
      lastName: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required]),
      phone: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required]),
    });
  }

  public mask = ['(', /[1-9]/, /[1-9]/, /[1-9]/, ')', ' ', /[1-9]/, /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/];

  onAddPerson(inputFirstName, inputLastName, inputPhone) {
    let person = new Person(inputFirstName.value, inputLastName.value, inputPhone.value);
    this.addperson.emit(person);
  } 

}
