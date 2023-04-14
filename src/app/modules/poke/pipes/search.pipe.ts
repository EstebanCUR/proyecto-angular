import { Pipe, PipeTransform } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pokemons: IPokemonDetails[], search: string): IPokemonDetails[] {
    return pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
