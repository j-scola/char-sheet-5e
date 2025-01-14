import { DndAbilityScore, DndAbilityScores } from '../domain';

export const getAbilityModifier = (ability: DndAbilityScore) => {
  return Math.floor(
    (ability.base +
      ability.speciesAdjustment +
      ability.situationalAdjustment -
      10) /
      2
  );
};
