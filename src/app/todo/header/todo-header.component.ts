import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'afd-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  @Output('add')
  private addTodoEventEmitter: EventEmitter<string> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  add() {
    if (this.form.valid) {
      const todo = this.form.get('todo');
      this.addTodoEventEmitter.emit(todo.value);
      this.clear();
    }
  }

  clear() {
    const todo = this.form.get('todo');
    todo.setValue('');
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      todo: ['', Validators.required]
    });
  }

}
