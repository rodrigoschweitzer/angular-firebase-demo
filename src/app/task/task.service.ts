import { Injectable } from '@angular/core';
import { AbstractService } from '@afd-core/abstract/abstract.service';
import { Task } from './task.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends AbstractService<Task> {

  constructor(protected afs: AngularFirestore) {
    super(afs, 'tasks');
  }

}
