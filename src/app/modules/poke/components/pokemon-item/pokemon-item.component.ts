import { Component, Input } from '@angular/core';
import { IPokemonDetails } from 'src/app/core/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon!: IPokemonDetails;
}
