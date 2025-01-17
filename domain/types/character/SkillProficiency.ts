import { Abilities } from '../../5e';

export type ProficiencyLevel = 0 | 1 | 2 | 3;

export interface SkillProficiency {
  skill: string;
  proficiencyLevel: ProficiencyLevel;
  baseAbility: Abilities;
}
