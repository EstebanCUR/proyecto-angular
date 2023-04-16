import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, forkJoin, map, switchMap } from 'rxjs';
import { IGeneralPokemon, IPokemonDetails, IPokemonPreview } from '../../../core/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'
  private pokemonDetail = new Subject<IPokemonDetails>();

  pokemonList: IPokemonDetails[] = [];
  pokemonDetail$ = this.pokemonDetail.asObservable();


  getAllPokemons(): Observable<IPokemonDetails[]> {

    return this.http.get<IGeneralPokemon>(`${this.apiUrl}`).pipe(
      switchMap((response) => {
        const urls = response.results.map((pokemon: IPokemonPreview) => pokemon.url);

        return forkJoin(urls.map((url: string) => this.http.get<IPokemonDetails>(url)));
      }),
      map((pokemons: IPokemonDetails[]) => {
        pokemons.forEach((pokemon: IPokemonDetails) => {

          const { id, name, types, abilities, stats, sprites } = pokemon;

          this.pokemonList.push({
            id: id,
            name: name,
            types: types.map(type => ({ type: { name: type.type.name } })),
            abilities: abilities.map(ability => ({ ability: { name: ability.ability.name } })),
            stats: stats.map(stat => ({ base_stat: stat.base_stat, stat: { name: stat.stat.name } })),
            sprites: { front_default: sprites.front_default }
          });
        });
        return this.pokemonList;
      })
    );
  }

  getPokemonById(id: number) {
    this.pokemonList.find((pokemon: IPokemonDetails) => {
      pokemon.id === id && this.pokemonDetail.next(pokemon)
    })
  }

}


