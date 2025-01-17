import { Ability, Skill } from '../../compendium';

export type ProficiencyLevel = 0 | 1 | 2 | 3;

export interface SkillProficiency {
  skill: Skill;
  proficiencyLevel: ProficiencyLevel;
  baseAbility: Ability;
}
