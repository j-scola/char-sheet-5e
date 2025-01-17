import React, { useState } from 'react';
import {
  DndAbilityScores,
  Level,
  ProficiencyLevel,
  DndAbilityModifiers,
  SkillProficiency,
  Dice,
} from '../domain';
import {
  getSkillModifier,
  getSkillModifierString,
} from '../lib/getSkillModifier';
import { LockEditButton } from './reusable/LockEditButton';
import { RollDice } from './reusable/RollDice/RollDice';

type ProficienciesProps = {
  proficiencies: SkillProficiency[];
  abilityModifiers: DndAbilityModifiers;
  level: Level;
  setProficiencies: React.Dispatch<React.SetStateAction<SkillProficiency[]>>;
  sendToChat: (message: string) => void;
};
export const Proficiencies = ({
  proficiencies,
  abilityModifiers,
  level,
  setProficiencies,
  sendToChat,
}: ProficienciesProps) => {
  const [editable, setEditable] = useState(false);

  const toggleProficiencyLevel = (proficiency: SkillProficiency) => {
    if (!editable) return;
    const newProficiencyLevel =
      proficiency.proficiencyLevel >= 2
        ? 0
        : ((proficiency.proficiencyLevel + 1) as ProficiencyLevel);

    setProficiencies((prev) => {
      return prev.map((prof) => {
        if (prof.skill === proficiency.skill) {
          return {
            ...prof,
            proficiencyLevel: newProficiencyLevel,
          };
        }
        return prof;
      });
    });
  };

  const renderProficiencyLevel = (proficiency) => {
    if (proficiency.proficiencyLevel === 0)
      return (
        <div
          className="m-1 w-4 h-4 rounded-full border border-1 border-black"
          onClick={() => toggleProficiencyLevel(proficiency)}
        ></div>
      );

    if (proficiency.proficiencyLevel === 1)
      return (
        <div
          className="m-1 w-4 h-4 rounded-full  bg-violet-300"
          onClick={() => toggleProficiencyLevel(proficiency)}
        ></div>
      );

    if (proficiency.proficiencyLevel === 2)
      return (
        <div
          className="m-1 w-4 h-4 rounded-full  border-4 border-spacing-1 border-violet bg-violet-300 border-dotted"
          onClick={() => toggleProficiencyLevel(proficiency)}
        ></div>
      );

    return;
  };

  return (
    <div className="box-outline-spacing">
      <div className="flex w-full justify-between">
        <h2 className="text-xl">Proficiencies</h2>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li
            key={index}
            className="flex items-center my-3 pr-2 justify-between"
          >
            <div className="flex items-center">
              {renderProficiencyLevel(proficiency)}
              <span className="mr-1">{proficiency.skill}</span>
              <span className="mr-1">
                {getSkillModifierString(abilityModifiers, proficiency, level)}
              </span>
            </div>
            <RollDice
              sides={Dice.D20}
              rollingFor={proficiency.skill}
              modifier={getSkillModifier(abilityModifiers, proficiency, level)}
              source={`Proficiency - ${proficiency.skill}`}
              sendToChat={sendToChat}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
