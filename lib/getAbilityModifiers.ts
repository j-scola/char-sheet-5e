import {
  Abilities,
  DndAbilityModifiers,
  DndAbilityScore,
  DndAbilityScores,
  SubSpecies,
} from '../domain';

const getSubspeciesAbilityAdjustment = (
  subSpecies: SubSpecies,
  ability: Abilities
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
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Strength)
    ),
    dexterity: getAbilityModifier(
      abilities.dexterity,
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Dexterity)
    ),
    constitution: getAbilityModifier(
      abilities.constitution,
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Constitution)
    ),
    intelligence: getAbilityModifier(
      abilities.intelligence,
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Intelligence)
    ),
    wisdom: getAbilityModifier(
      abilities.wisdom,
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Wisdom)
    ),
    charisma: getAbilityModifier(
      abilities.charisma,
      getSubspeciesAbilityAdjustment(subSpecies, Abilities.Charisma)
    ),
  };
};
