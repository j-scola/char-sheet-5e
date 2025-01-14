import { Weapon } from '..';
import { EmptyAbilityScores, DndAbilityScores } from './AbilityScore';
import { Species, SubSpecies, EmptySpecies, EmptySubSpecies } from './Species';
import { LevelOne, Level } from './Level';

export interface Character {
  name: string;
  level: Level;
}

export const EmptyCharacter: Character = {
  name: '',
  level: LevelOne,
};
