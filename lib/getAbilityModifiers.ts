import {
  Ability,
  DndAbilityModifiers,
  DndAbilityScore,
  DndAbilityScores,
  SubSpecies,
} from '../domain';

const getSubspeciesAbilityAdjustment = (
  subSpecies: SubSpecies,
  ability: Ability
) => {
  return subSpecies.abilityModifiers[ability] || 0;
};

export const getAbilityModifier = (
  ability: DndAbilityScore,
  subSpeciesAdjustment: number
) => {
  return Math.floor(
    (ability.base + subSpeciesAdjustment + ability.situationalAdjustment - 10) /
      2
  );
};

export const getAbilityModifiers = (
  abilities: DndAbilityScores,
  subSpecies: SubSpecies
): DndAbilityModifiers => {
  return {
    strength: getAbilityModifier(
      abilities.strength,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Strength)
    ),
    dexterity: getAbilityModifier(
      abilities.dexterity,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Dexterity)
    ),
    constitution: getAbilityModifier(
      abilities.constitution,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Constitution)
    ),
    intelligence: getAbilityModifier(
      abilities.intelligence,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Intelligence)
    ),
    wisdom: getAbilityModifier(
      abilities.wisdom,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Wisdom)
    ),
    charisma: getAbilityModifier(
      abilities.charisma,
      getSubspeciesAbilityAdjustment(subSpecies, Ability.Charisma)
    ),
  };
};
