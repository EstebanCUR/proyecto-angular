import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPageComponent } from './page/pokemon-page/pokemon-page.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

import { PokeRoutingModule } from './poke-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailComponent,
    PokemonPageComponent,
    PokemonSearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    PokeRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    PokemonPageComponent
  ]
})
export class PokeModule { }
