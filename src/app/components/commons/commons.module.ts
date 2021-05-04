// Core Imports.
import { NgModule } from '@angular/core';

// Modules Imports.
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

const COMMONS_MODULES = [HeaderModule,FooterModule]; // Set the array of componets

@NgModule({
  declarations: [],
  imports: [ BaseModule,...COMMONS_MODULES],
  providers: [],
  bootstrap: [],
  exports: [...COMMONS_MODULES],
})
export class CommonsModule { }
