import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'afd-task-header',
  templateUrl: './task-header.component.html'
})
export class TaskHeaderComponent implements OnInit {

  @Output('add')
  private addTaskEventEmitter: EventEmitter<string> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  add() {
    const { value } = this.form.get('task');

    if (value && value.trim().length) {
      this.addTaskEventEmitter.emit(value);
      this.clear();
    }
  }

  clear() {
    const task = this.form.get('task');
    task.reset('');
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      task: ['']
    });
  }

}
