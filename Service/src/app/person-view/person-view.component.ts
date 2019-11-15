import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';

import { PersonsService } from '../shared/services/persons.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;
  @Output() deleteperson = new EventEmitter<number>();
  @Output() editPerson = new EventEmitter<Person>();
  
  isEdit: boolean;
  addEdit: string = "Редактировать";

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    console.log(this.inPerson)
  }

  onDeletePerson(inPerson) {
    
  }

  showEdit() {
    
  }

  async doPut(id, inPerson) {
    try {
          this.isEdit = !this.isEdit;
        if (this.addEdit == "Редактировать") {
          this.addEdit = "Сохранить";
          
        }
        else {this.addEdit = "Редактировать";
        await this.personsService.putPersons(id, inPerson);}
    } catch (err) {
      console.error(err);
    }
  }

  async doDelete(inPerson) {
    try {
      await this.personsService.deletePersons(inPerson);
      this.deleteperson.emit(inPerson);
    } catch (err) {
      console.error(err);
    }
  }

}
