import { DndAbilityScores, Level, SkillProficiency } from '../domain';
import { getAbilityModifier } from './getAbilityModifiers';

export const getSkillModifier = (
  abilities: DndAbilityScores,
  proficiency: SkillProficiency,
  level: Level
) => {
  return (
    getAbilityModifier(abilities[proficiency.baseAbility]) +
    level.proficiencyBonus * (proficiency.proficiencyLevel + 1)
  );
};

export const getSkillModifierString = (
  abilities: DndAbilityScores,
  proficiency: SkillProficiency,
  level: Level
) => {
  const val = getSkillModifier(abilities, proficiency, level);
  if (val >= 0) {
    return `+${val}`;
  } else {
    return val;
  }
};
