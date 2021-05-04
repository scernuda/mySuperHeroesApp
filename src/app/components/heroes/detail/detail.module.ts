import { NgModule } from '@angular/core';

import { DetailComponent } from './detail.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

// Router Imports.
import { DetailRoutingModule } from './detail-routing.module';

const DETAIL_COMPONENTS = [DetailComponent]; // Set the array of componets

@NgModule({
  declarations: [...DETAIL_COMPONENTS],
  imports: [DetailRoutingModule, BaseModule],
  providers: [],
  bootstrap: []
})
export class DetailModule { }
