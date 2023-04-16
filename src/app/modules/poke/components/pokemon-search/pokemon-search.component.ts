import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {

  private _searchService = inject(SearchService)

  searchControl = new FormControl('', {validators: [Validators.pattern('[a-zA-Z ]*')]})

  inputChange(event: any) {
    this._searchService.setSearch(event);
  }
}
