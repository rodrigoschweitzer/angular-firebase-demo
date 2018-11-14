import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './containers/task.component';

const routes: Routes = [
  { path: '', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

export const ROUTE_COMPONENTS = [TaskComponent];
