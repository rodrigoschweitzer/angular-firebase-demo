import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'afd-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Output('delete')
  private deleteTodoEventEmitter: EventEmitter<Todo> = new EventEmitter();

  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
    this.todos.push(
      { title: 'Teste adfsdf sdf', done: false }
    );
  }

  delete(todo: Todo) {
    this.deleteTodoEventEmitter.emit(todo);
  }



}
