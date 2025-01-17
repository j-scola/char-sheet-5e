import { Armor } from '../domain';

export const getArmorClass = (dexterityModifier: number, armor: Armor) => {
  let dexBonus =
    dexterityModifier >= armor.maximumDexterityBonus
      ? armor.maximumDexterityBonus
      : dexterityModifier;
  return armor.armorClass + dexBonus;
};
