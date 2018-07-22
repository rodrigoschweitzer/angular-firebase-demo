import { NgModule } from '@angular/core';

import { SharedModule } from '@afd-shared/shared.module';
import { ListRoutingModule, ROUTE_COMPONENTS } from './list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  declarations: [
    ROUTE_COMPONENTS
  ]
})
export class ListModule { }
