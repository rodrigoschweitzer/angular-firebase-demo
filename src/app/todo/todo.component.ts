import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'afd-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  add(title: string) {
    this.todoService.add({ title, done: false, createAt: new Date() });
  }

  done(todo: Todo) {
    this.todoService.update(todo);
  }

  delete(todo: Todo) {
    this.todoService.delete(todo);
  }

  private loadTodos() {
    this.todos$ = this.todoService.list(ref => ref.orderBy('createAt', 'desc'));
  }

}
