import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonsService } from '../shared/services/persons.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  personForm: FormGroup;
  disabledForms = false;
  
  constructor(private personsService: PersonsService) { 
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

  async doPost(inputFirstName, inputLastName, inputPhone) {
    
    let obj = {firstname: inputFirstName.value, lastname: inputLastName.value, phone: inputPhone.value};
    try {
      await this.personsService.postPersons(obj);
      let person = new Person(inputFirstName.value, inputLastName.value, inputPhone.value);
      this.addperson.emit(person);
    } catch (err) {
      console.error(err);
    }
  }

}
