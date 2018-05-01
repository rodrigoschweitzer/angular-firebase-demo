import { Injectable } from '@angular/core';
import { AbstractService } from '@afd-core/abstract/abstract.service';
import { Todo } from './todo.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TodoService extends AbstractService<Todo> {

  constructor(protected afs: AngularFirestore) {
    super(afs, 'todos');
  }

}
