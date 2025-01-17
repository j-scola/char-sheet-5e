import { DndAbilityModifiers, Level, SkillProficiency } from '../domain';

export const getSkillModifier = (
  abilityModifiers: DndAbilityModifiers,
  proficiency: SkillProficiency,
  level: Level
) => {
  return (
    abilityModifiers[proficiency.baseAbility] +
    level.proficiencyBonus * (proficiency.proficiencyLevel + 1)
  );
};

export const getSkillModifierString = (
  abilityModifiers: DndAbilityModifiers,
  proficiency: SkillProficiency,
  level: Level
) => {
  const val = getSkillModifier(abilityModifiers, proficiency, level);
  if (val >= 0) {
    return `+${val}`;
  } else {
    return val;
  }
};
