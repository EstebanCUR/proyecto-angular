import { Component, Input, inject } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { FavoriteService } from '../../services/favorite.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent{


  private _favoriteService = inject(FavoriteService);
  private _apiService = inject(ApiService)

  @Input() pokemon!: IPokemonDetails;


  setFavoritePokemon(pokemon: IPokemonDetails) {
    this._favoriteService.setFavoritePokemon(pokemon);
    localStorage.setItem('favoritePokemon', JSON.stringify(pokemon))
  }

  getDetails(pokemon: IPokemonDetails){
    this._apiService.getPokemonById(pokemon.id)
  }

}
