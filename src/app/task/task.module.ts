import { NgModule } from '@angular/core';

import { SharedModule } from '@afd-shared/shared.module';
import { TaskHeaderComponent } from './header/task-header.component';
import { TaskListComponent } from './list/task-list.component';
import { ROUTE_COMPONENTS, TaskRoutingModule } from './task-routing.module';
import { EmptyTaskComponent } from './list/empty-task-message.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    ROUTE_COMPONENTS,
    TaskHeaderComponent,
    TaskListComponent,
    EmptyTaskComponent
  ]
})
export class TaskModule { }
