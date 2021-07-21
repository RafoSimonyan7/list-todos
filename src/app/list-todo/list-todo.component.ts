import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  @Input() person!: Person
  @Output() personEventEmiiter: EventEmitter<Person> = new EventEmitter<Person>();
  
  persons = [] as any

  addNewPerson(firstname: any, lastName: any, age: any) {

    this.persons.push({
      firstname: firstname,
       lastName: lastName,
        age: age
    })
    this.personEventEmiiter.emit(this.persons)
  }
  
}
