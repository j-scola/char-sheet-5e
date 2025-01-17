import React from 'react';
import {
  Ability,
  DndAbilityScores,
  DndClass,
  DndAbilityModifiers,
  Dice,
} from '../domain';
import { getAbilityModifier } from '../lib/getAbilityModifiers';
import { modifierToString } from '../lib/modifierToString';
import { RollDice } from './reusable/RollDice/RollDice';

export const SavingThrows: React.FC<{
  abilityModifiers: DndAbilityModifiers;
  dndClass: DndClass;
  proficiencyBonus: number;
  sendToChat: (message: string) => void;
}> = ({ abilityModifiers, dndClass, proficiencyBonus, sendToChat }) => {
  const savingThrows = {
    strength:
      abilityModifiers.strength +
      (dndClass.savingThrowProficiencies.includes(Ability.Strength)
        ? proficiencyBonus
        : 0),
    dexterity:
      abilityModifiers.dexterity +
      (dndClass.savingThrowProficiencies.includes(Ability.Dexterity)
        ? proficiencyBonus
        : 0),
    constitution:
      abilityModifiers.constitution +
      (dndClass.savingThrowProficiencies.includes(Ability.Constitution)
        ? proficiencyBonus
        : 0),
    intelligence:
      abilityModifiers.intelligence +
      (dndClass.savingThrowProficiencies.includes(Ability.Intelligence)
        ? proficiencyBonus
        : 0),
    wisdom:
      abilityModifiers.wisdom +
      (dndClass.savingThrowProficiencies.includes(Ability.Wisdom)
        ? proficiencyBonus
        : 0),
    charisma:
      abilityModifiers.charisma +
      (dndClass.savingThrowProficiencies.includes(Ability.Charisma)
        ? proficiencyBonus
        : 0),
  };

  const renderThrow = (ability: keyof DndAbilityModifiers) => {
    return (
      <div className="m-1 flex justify-between">
        <label>
          {ability}:<span>{modifierToString(savingThrows[ability])}</span>
        </label>
        <RollDice
          sides={Dice.D20}
          rollingFor={`${ability} saving throw`}
          modifier={savingThrows[ability]}
          sendToChat={sendToChat}
        />
      </div>
    );
  };

  return (
    <div className="box-outline-spacing">
      <h2 className="text-xl">Saving Throws</h2>
      <div className="flex flex-col">
        {renderThrow('strength')}
        {renderThrow('dexterity')}
        {renderThrow('constitution')}
        {renderThrow('intelligence')}
        {renderThrow('wisdom')}
        {renderThrow('charisma')}
      </div>
    </div>
  );
};
