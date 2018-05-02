import { SharedModule } from '@afd-shared/shared.module';
import { NgModule } from '@angular/core';

import { TaskHeaderComponent } from './header/task-header.component';
import { TaskListComponent } from './list/task-list.component';
import { ROUTE_COMPONENTS, TaskRoutingModule } from './task-routing.module';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    ROUTE_COMPONENTS,
    TaskHeaderComponent,
    TaskListComponent
  ],
  providers: [TaskService]
})
export class TaskModule { }
