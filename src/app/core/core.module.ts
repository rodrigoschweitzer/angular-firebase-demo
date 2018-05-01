import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';

@NgModule({
  imports: [],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) throw new Error('CoreModule is already loaded. This module can only be imported on AppModule.');
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				AbstractService
			]
		};
	}
}
