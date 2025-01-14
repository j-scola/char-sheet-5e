export const EmptySpecies: Species = {
  name: '',
  subRaces: [],
};

export const EmptySubSpecies: SubSpecies = {
  name: '',
  abilityModifiers: {},
  size: '',
  speed: 0,
  languages: [],
  traits: [],
};

export interface Species {
  name: string;
  subRaces: SubSpecies[];
}

export interface SubSpecies {
  name: string;
  abilityModifiers: {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
  };
  size: string;
  speed: number;
  languages: string[];
  traits: string[];
}
