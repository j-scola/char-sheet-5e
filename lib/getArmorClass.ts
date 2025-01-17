import { Armor, DndAbilityModifiers, Shield } from '../domain';

export const getArmorClass = (
  abilityModifiers: DndAbilityModifiers,
  armor?: Armor,
  shield?: Shield
) => {
  if (!armor) {
    if (!shield) {
      return 10 + abilityModifiers.dexterity;
    }
    return 10 + abilityModifiers.dexterity + shield.armorClass;
  }

  const dexBonus =
    abilityModifiers.dexterity >= armor.maximumDexterityBonus
      ? armor.maximumDexterityBonus
      : abilityModifiers.dexterity;

  return 10 + dexBonus + armor.armorClass + shield.armorClass;
};
