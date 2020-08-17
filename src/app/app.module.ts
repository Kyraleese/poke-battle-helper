import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  PokeTypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
