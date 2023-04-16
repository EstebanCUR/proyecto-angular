import { Component, OnInit, inject } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/modules/poke/services/api.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private _apiService = inject(ApiService)
  private _searchService = inject(SearchService)

  pokemonList: IPokemonDetails[]= []
  currentPage: number = 1
  search: string = ''

  ngOnInit(): void {
    this.getPokemons()
    this.getSearch()
  }

  getPokemons() {
    this._apiService.getAllPokemons().subscribe(( pokemon: any) => {
      this.pokemonList = pokemon
    });
  }

  getSearch() {
    this._searchService.searchPokemon$.subscribe(pokemon => {
      this.search = pokemon
    })
  }
}
