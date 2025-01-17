import React from 'react';
import { Armor, DndAbilityModifiers, Shield } from '../domain';
import { getArmorClass } from '../lib/getArmorClass';

export const ArmorClass: React.FC<{
  armor: Armor[];
  shield: Shield[];
  abilityModifiers: DndAbilityModifiers;
}> = ({ armor, shield, abilityModifiers }) => {
  return (
    <div className="box-outline-spacing">
      <h2>Armor Class</h2>
      <div>{getArmorClass(abilityModifiers, armor[0], shield[0])}</div>
    </div>
  );
};
