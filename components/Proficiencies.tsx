import React, { useState } from 'react';
import {
  DndAbilityScores,
  Level,
  ProficiencyLevel,
  SkillProficiency,
} from '../domain';
import { getAbilityModifier } from '../lib/getAbilityModifiers';
import {
  getSkillModifier,
  getSkillModifierString,
} from '../lib/getSkillModifier';
import { LockEditButton } from './reusable/LockEditButton';

type ProficienciesProps = {
  proficiencies: SkillProficiency[];
  abilities: DndAbilityScores;
  level: Level;
  setProficiencies: React.Dispatch<React.SetStateAction<SkillProficiency[]>>;
};
export const Proficiencies = ({
  proficiencies,
  abilities,
  level,
  setProficiencies,
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
    <div className="w-1/3 border-blue border-2 p-1 m-1">
      <div className="flex w-full justify-between">
        <h2 className="text-xl">Skill Proficiencies</h2>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>

      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index} className="flex items-center my-2">
            {renderProficiencyLevel(proficiency)}
            <span className="mr-1">{proficiency.skill}</span>
            <div>
              <span className="mr-1">
                {getSkillModifierString(abilities, proficiency, level)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
