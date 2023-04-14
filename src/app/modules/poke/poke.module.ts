import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeRoutingModule } from './poke-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailComponent,
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokeRoutingModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokeModule { }
