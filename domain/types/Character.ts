import { Weapon } from '..';
import { EmptyAbilityScores, DndAbilityScores } from './AbilityScore';
import { Species, SubSpecies, EmptySpecies, EmptySubSpecies } from './Species';
import { LevelOne, Level } from './Level';

export interface Character {
  name: string;
  species: Species;
  subSpecies: SubSpecies;
  class: string;
  level: Level;
  abilities: DndAbilityScores;
  proficiencies: string[];
  weapons: Weapon[];
}

export const EmptyCharacter: Character = {
  name: '',
  species: EmptySpecies,
  subSpecies: EmptySubSpecies,
  class: '',
  level: LevelOne,
  abilities: EmptyAbilityScores,
  proficiencies: [],
  weapons: [],
};
