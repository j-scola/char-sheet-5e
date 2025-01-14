import { Levels } from '../5e/Levels';

export interface Level {
  level: number;
  proficiencyBonus: number;
  experiencePoints: number;
}

export const LevelOne = Levels[0];
