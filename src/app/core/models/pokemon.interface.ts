
export interface IGeneralPokemon {
  count:    number;
  next: string | null;
  previous: string | null;
  results:  IPokemonPreview[];
}

export interface IPokemonPreview {
  name: string;
  url:  string;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  types: Type[];
  abilities: Ability[];
  stats: Stat[];
  sprites: Sprites;
}

export interface Type {
  type: Species;
}

export interface Ability {
  ability: Species;
}

export interface Stat {
  base_stat: number;
  stat: Species;
}

export interface Species {
    name: string;
}

export interface Sprites {
  front_default: string;

}

