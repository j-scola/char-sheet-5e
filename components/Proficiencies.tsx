import React from 'react';
import { SkillProficiencies } from '../domain/5e/Proficiencies';
import { Character } from '../domain';

type ProficienciesProps = {
  character: Character;
};
export const Proficiencies = ({ character }: ProficienciesProps) => {
  return (
    <div>
      <h2>Skill Proficiencies</h2>
      <ul>
        {SkillProficiencies.map((proficiency, index) => (
          <li key={index}>
            <span>{proficiency.skill}</span>
            <div>
              <span>Modifier</span>
              <span>
                {character.abilities[proficiency.baseAbility].base +
                  character.abilities[proficiency.baseAbility]
                    .speciesAdjustment +
                  character.abilities[proficiency.baseAbility]
                    .situationalAdjustment +
                  character.level.proficiencyBonus}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
