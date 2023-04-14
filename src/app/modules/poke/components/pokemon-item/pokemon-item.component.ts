import { Component, Input, inject } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {

  private _apiService = inject(ApiService)

  @Input() pokemon!: IPokemonDetails;

  favoritePokemon(pokemon: IPokemonDetails) {
    this._apiService.setFavoritePokemon(pokemon);
  }

}
