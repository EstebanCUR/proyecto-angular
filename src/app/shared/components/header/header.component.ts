import { Component, inject, OnInit } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';
import { ApiService } from 'src/app/modules/poke/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _apiService = inject(ApiService)

  favoritePokemon : IPokemonDetails | undefined

  ngOnInit(): void{
    this._apiService.favoritePokemon$.subscribe(pokemon =>{
      this.favoritePokemon = pokemon
    })

  }

}
