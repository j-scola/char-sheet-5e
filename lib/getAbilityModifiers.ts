import { Character } from '../domain';

export const getStrengthModifier = (character: Character) => {
  return character.abilities.strength.base;
};
