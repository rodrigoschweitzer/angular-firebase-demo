import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'afd-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  tasks$: Observable<Task[]>;

  tasksCompleted$: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  add(title: string) {
    this.taskService.add({ title, completed: false, createdAt: new Date(), finishedAt: null });
  }

  completed(task: Task) {
    this.taskService.update(task);
  }

  delete(task: Task) {
    this.taskService.delete(task);
  }

  private loadTasks() {
    this.tasks$ = this.taskService.list(ref => ref.where('completed', '==', false).orderBy('createdAt', 'desc'));
    this.tasksCompleted$ = this.taskService.list(ref => ref.where('completed', '==', true).orderBy('finishedAt', 'desc'));
  }

}
