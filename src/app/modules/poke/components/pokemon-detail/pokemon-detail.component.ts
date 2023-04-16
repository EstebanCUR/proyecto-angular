import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private _apiService = inject(ApiService)

  pokemonSelected: IPokemonDetails | undefined

  ngOnInit(): void {
    this.getPokemonSelected()
  }

  getPokemonSelected() {
    this._apiService.pokemonDetail$.subscribe(pokemon => {
      this.pokemonSelected = pokemon
    })
  }
}
