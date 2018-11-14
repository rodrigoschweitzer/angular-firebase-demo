import { SharedModule } from '@afd-shared/shared.module';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TaskHeaderComponent } from './components/header/task-header.component';
import { EmptyTaskComponent } from './components/list/empty-task-message.component';
import { TaskListComponent } from './components/list/task-list.component';
import { TaskEffects } from './state/task.effects';
import { reducer } from './state/task.reducer';
import { ROUTE_COMPONENTS, TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
    StoreModule.forFeature('tasks', reducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  declarations: [
    ROUTE_COMPONENTS,
    TaskHeaderComponent,
    TaskListComponent,
    EmptyTaskComponent
  ]
})
export class TaskModule { }
