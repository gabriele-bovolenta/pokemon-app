export type CountPokemonType = {
  count: number;
  next: string;
  previous: any;
  results: PokemonType[];
};

export type PokemonType = {
  name: string;
  url: string;
};

type AbilitiesType = {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
};

type Forms = {
  name: string;
  url: string;
};

type GameIndices = {
  gameIndex: number;
  version: {
    name: string;
    url: string;
  };
};

export type PokemonDetailType = {
  abilities: AbilitiesType[];
  baseExperience: number;
  forms: Forms[];
  gameIndices: GameIndices[];
  height: number;
  id: number;
  name: string;
  weight: number;
};