export const modifierToString = (modifier: number): string => {
  return modifier > 0 ? `+${modifier}` : `${modifier}`;
};
