import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeTypesComponent } from './poke-types/poke-types.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';

const routes: Routes = [
  { path: '', component: PokeTypesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}