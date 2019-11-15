import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';
import { PersonsService } from './shared/services/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Персонажи';
  firstname_filter: boolean;
  search_firstname = "";
  search_lastname = "";
  lastname_filter: boolean;
  persons: Person[] = [];
  
  constructor(private personsService: PersonsService) {

  }

  async ngOnInit() {

    try {
      let res = await this.personsService.getPersons();
      for (var prop in res) {
        let data = [];
        for (var key in res[prop]) {
          data.push(res[prop][key]);
        }
        this.persons.push(new Person(data[0], data[1], data[2], data[3]));
      }
    } catch (err) {
      console.error(err);
    }
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
  }
  
  onDeletePerson(inPerson) {
    this.persons.splice(this.persons.indexOf(inPerson), 1);
  }

  async doGet() {
    try {
      let res = await this.personsService.getPersons();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  
  
}
