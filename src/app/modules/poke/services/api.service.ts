import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { IGeneralPokemon, IPokemonDetails, IPokemonPreview } from '../../../core/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'


  getAllPokemons(): Observable<IPokemonDetails[]> {
    const pokemonList: IPokemonDetails[] = [];

    return this.http.get<IGeneralPokemon>(`${this.apiUrl}`).pipe(
      switchMap((response) => {
        const urls = response.results.map((pokemon: IPokemonPreview) => pokemon.url);

        return forkJoin(urls.map((url: string) => this.http.get<IPokemonDetails>(url)));
      }),
      map((pokemons: IPokemonDetails[]) => {
        pokemons.forEach((pokemon: IPokemonDetails) => {

          const { id, name, types, abilities, stats, sprites } = pokemon;

          pokemonList.push({
            id: id,
            name: name,
            types: types.map(type => ({ type: { name: type.type.name } })),
            abilities: abilities.map(ability => ({ ability: { name: ability.ability.name } })),
            stats: stats.map(stat => ({ base_stat: stat.base_stat, stat: { name: stat.stat.name } })),
            sprites: { front_default: sprites.front_default }
          });
        });
        return pokemonList;
      })
    );
  }
}


/* pokemonList.push({
    id: id,
    name: name,
    types: [{ type: { name: types[0].type.name } }],
    abilities: [{ ability: { name: abilities[0].ability.name } }],
    stats: [{ base_stat: stats[0].base_stat }],
    sprites: { front_default: sprites.front_default }
}); */
