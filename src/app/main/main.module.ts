import { SharedModule } from '@afd-shared/shared.module';
import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';

import { MainRoutingModule, ROUTE_COMPONENTS } from './main-routing.module';

const COVALENT_MODULES = [
	CovalentLayoutModule,
	CovalentMediaModule
];

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    COVALENT_MODULES
  ],
  declarations: [ROUTE_COMPONENTS]
})
export class MainModule { }
