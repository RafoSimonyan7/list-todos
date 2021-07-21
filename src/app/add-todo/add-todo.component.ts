import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  newPerson = [] as any;

  addPerson(persons: any) {
    console.log(persons);

    this.newPerson = persons;
    console.log(this.newPerson);
  }

  removePerson (i: number) {
    this.newPerson.splice(i,1);

  }
}
