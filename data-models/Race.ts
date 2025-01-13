export const EmptyRace: Race = {
  name: '',
  subRaces: [],
};

export const EmptySubRace: SubRace = {
  name: '',
  abilityModifiers: {},
  size: '',
  speed: 0,
  languages: [],
  traits: [],
};

export interface Race {
  name: string;
  subRaces: SubRace[];
}

export interface SubRace {
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
