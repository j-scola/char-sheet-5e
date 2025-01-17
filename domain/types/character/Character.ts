import { LevelOne, Level } from './Level';

export interface Character {
  name: string;
  level: Level;
}

export const EmptyCharacter: Character = {
  name: '',
  level: LevelOne,
};
