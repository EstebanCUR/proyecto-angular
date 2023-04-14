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

  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this._apiService.getAllPokemons().subscribe(( urls: any) => {
      this.pokemonList = urls
    });
  }
  /* getPokemons() {
    this._apiService.getAllPokemons().subscribe(( urls: any) => {
      console.log(urls);
      urls.forEach((url: any) => {
        this._apiService.getUrlPokemonDetails(url).subscribe(pokemon =>{
          this.pokemonList.push({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types[0].type.name,
            abilities: pokemon.abilities[0].ability.name,
            stats: pokemon.stats[0].base_stat,
            sprites: pokemon.sprites.front_default
          })
        })
      })
    });

  } */

}

/* this._apiService.getUrlPokemonDetails().subscribe(( urls: any) => {
      console.log(urls);
    }); */
