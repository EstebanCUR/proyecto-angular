import { Component, inject, OnInit } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { FavoriteService } from 'src/app/modules/poke/services/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _favoriteService = inject(FavoriteService);

  favoritePokemon : IPokemonDetails | undefined

  ngOnInit(): void{
    this.getFavoritePokemon()
  }

  getFavoritePokemon(){
    this._favoriteService.favoritePokemon$.subscribe(pokemon =>{
      this.favoritePokemon = pokemon
    })
  }

}
