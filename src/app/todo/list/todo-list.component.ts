import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'afd-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  todos: Todo[] = [];

  @Output('delete')
  private deleteTodoEventEmitter: EventEmitter<Todo> = new EventEmitter();

  @Output('done')
  private doneTodoEventEmitter: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  done(event: MatCheckboxChange, todo: Todo) {
    this.doneTodoEventEmitter.emit({ ...todo, done: event.checked });
  }

  delete(todo: Todo) {
    this.deleteTodoEventEmitter.emit(todo);
  }

  trackById(index: number, todo: Todo) {
    return todo ? todo.id : index;
}

}
