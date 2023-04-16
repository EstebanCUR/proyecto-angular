import { Component, inject, OnInit } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/modules/poke/services/api.service';
import { FavoriteService } from 'src/app/modules/poke/services/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _favoriteService = inject(FavoriteService);
  private _apiService = inject(ApiService)

  favoritePokemon : IPokemonDetails | undefined

  ngOnInit(): void{
    this.getFavoritePokemon()
    const favoriteStorage = localStorage.getItem('favoritePokemon')
    this.favoritePokemon = favoriteStorage && JSON.parse(favoriteStorage)
  }

  getFavoritePokemon(){
    this._favoriteService.favoritePokemon$.subscribe(pokemon =>{
      this.favoritePokemon = pokemon
    })
  }

  getDetails(pokemon: IPokemonDetails){
    this._apiService.getPokemonById(pokemon.id)
  }

}
