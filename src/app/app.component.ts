import { Component } from '@angular/core';
import { Model, ToDoItem } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Note';

  model = new Model();

  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return this.model.items;
  }

  addItem(newTask: string) {
    if (newTask) {
      this.model.items.push(new ToDoItem(newTask, false));
    } else {
      alert('Fill Input');
    }
  }
}