import { Levels } from '../../compendium';

export interface Level {
  level: number;
  proficiencyBonus: number;
  experiencePoints: number;
}

export const LevelOne = Levels[0];
