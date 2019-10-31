import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;
  @Output() deleteperson = new EventEmitter<number>();

  isEdit: boolean;
  addEdit: string = "Редактировать";
  constructor() { }

  ngOnInit() {
    console.log(this.inPerson)
  }

  showEdit() {
    this.isEdit = !this.isEdit;
    if (this.addEdit == "Редактировать")
    this.addEdit = "Сохранить"
    else this.addEdit = "Редактировать";
  }

  
  onDeletePerson(id: number) {
    this.deleteperson.emit(id);
  }


}
