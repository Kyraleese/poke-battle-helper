import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';
import { PokeTypesComponent } from './poke-types/poke-types.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,  PokeTypeComponent, PokeTypesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
