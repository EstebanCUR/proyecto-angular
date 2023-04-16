import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchValue = new Subject<string>();
  searchPokemon$ = this.searchValue.asObservable()

  setSearch(value: string) {
    this.searchValue.next(value);
  }
}
