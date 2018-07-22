import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'lists' },
      { path: 'lists', loadChildren: 'app/list/list.module#ListModule' },
      { path: 'tasks', loadChildren: 'app/task/task.module#TaskModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

export const ROUTE_COMPONENTS = [MainComponent];
