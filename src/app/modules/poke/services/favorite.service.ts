import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoritePokemon = new Subject<IPokemonDetails>();
  favoritePokemon$ = this.favoritePokemon.asObservable();

  setFavoritePokemon(pokemon: IPokemonDetails){
    this.favoritePokemon.next(pokemon);
  }
}
