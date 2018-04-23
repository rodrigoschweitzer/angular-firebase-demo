import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule, ROUTE_COMPONENTS } from './todo-routing.module';
import { SharedModule } from '@afd-shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [ROUTE_COMPONENTS]
})
export class TodoModule { }
