import {
  Character,
  DndAbilityScores,
  DndClass,
  DndAbilityModifiers,
  SubSpecies,
} from '../domain';
import { getAbilityModifiers } from './getAbilityModifiers';
import { getSavingThrows } from './getSavingThrows';

export const getCalculatedFields = (
  abilities: DndAbilityScores,
  dndClass: DndClass,
  subSpecies: SubSpecies,
  character: Character
): {
  abilityModifiers: DndAbilityModifiers;
  savingThrows: DndAbilityModifiers;
} => {
  const abilityModifiers = getAbilityModifiers(abilities, subSpecies);
  const savingThrows = getSavingThrows(abilityModifiers, dndClass, character);
  return {
    abilityModifiers,
    savingThrows,
  };
};
