import { Component, OnInit, inject } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/modules/poke/services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemonDetails[]= []
  currentPage: number = 1
  search: string = ''

  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this._apiService.getAllPokemons().subscribe(( urls: any) => {
      this.pokemonList = urls
    });
  }
}
