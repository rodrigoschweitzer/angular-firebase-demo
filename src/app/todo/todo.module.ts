import { SharedModule } from '@afd-shared/shared.module';
import { NgModule } from '@angular/core';

import { TodoHeaderComponent } from './header/todo-header.component';
import { TodoListComponent } from './list/todo-list.component';
import { ROUTE_COMPONENTS, TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    ROUTE_COMPONENTS,
    TodoHeaderComponent,
    TodoListComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }
