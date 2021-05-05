// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Specific Components Imports
import { ComponentsComponent } from './components.component';

// Modules Imports
import { CommonsModule } from './commons/commons.module';
import { HeroesModule } from './heroes/heroes.module';

// Router Imports.
import { ComponentsRoutingModule } from './components-routing.module';

const COMPONENT_MODULES = [CommonsModule, HeroesModule]; // Set the array of modules

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    ComponentsRoutingModule,
    ...COMPONENT_MODULES
  ],
  providers: [],
  bootstrap: [],
  exports: [...COMPONENT_MODULES],
})
export class ComponentsModule { }
