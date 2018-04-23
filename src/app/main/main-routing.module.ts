import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'todos' },
      { path: 'todos', loadChildren: 'app/todo/todo.module#TodoModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

export const ROUTE_COMPONENTS = [MainComponent];
