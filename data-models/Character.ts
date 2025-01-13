import { Abilities, EmptyAbilities, SavingThrow, Weapon } from '.';
import { EmptyRace, EmptySubRace, Race, SubRace } from './Race';

export interface Character {
  name: string;
  race: Race;
  subRace: SubRace;
  class: string;
  level: number;
  abilities: Abilities;
  proficiencies: string[];
  savingThrows: SavingThrow[];
  weapons: Weapon[];
}

export const EmptyCharacter: Character = {
  name: '',
  race: EmptyRace,
  subRace: EmptySubRace,
  class: '',
  level: 1,
  abilities: EmptyAbilities,
  proficiencies: [],
  savingThrows: [],
  weapons: [],
};
