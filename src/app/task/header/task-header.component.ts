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
    if (this.form.valid) {
      const task = this.form.get('task');
      this.addTaskEventEmitter.emit(task.value);
      this.clear();
    }
  }

  clear() {
    const task = this.form.get('task');
    task.setValue('');
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      task: ['', Validators.required]
    });
  }

}
