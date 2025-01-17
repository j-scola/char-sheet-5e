import { Abilities, Character, DndAbilityModifiers, DndClass } from '../domain';

export const getSavingThrows = (
  abilityModifiers: DndAbilityModifiers,
  dndClass: DndClass,
  character: Character
): DndAbilityModifiers => {
  const result: DndAbilityModifiers = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  Object.entries(Abilities).forEach(([abilityName, ability]) => {
    result[ability] =
      abilityModifiers[ability] +
      (dndClass.savingThrowProficiencies.includes(ability)
        ? character.level.proficiencyBonus
        : 0);
  });

  return result;
};
