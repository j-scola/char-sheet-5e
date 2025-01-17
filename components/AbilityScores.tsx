import React, { useState } from 'react';
import { DndAbilityScores, Character, Species, SubSpecies } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';

interface AbilityScoresProps {
  abilities: DndAbilityScores;
  species: Species;
  subSpecies: SubSpecies;
  setAbilities: React.Dispatch<React.SetStateAction<DndAbilityScores>>;
}
export const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilities,
  species,
  subSpecies,
  setAbilities,
}) => {
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => setEditable((prev) => !prev);

  return (
    <div className="box-outline-spacing">
      <div className="flex justify-between">
        <h2 className="text-xl">Abilities</h2>
        <LockEditButton
          editable={editable}
          setEditable={() => toggleEditable()}
        />
      </div>
      <div>
        {Object.entries(abilities).map(([ability, score]) => {
          if (ability === 'editable') return null;

          const subSpeciesAdjustment =
            subSpecies.abilityModifiers[ability] || 0;
          const base =
            score.base + subSpeciesAdjustment + score.situationalAdjustment;

          const modifier = Math.floor((base - 10) / 2);

          let modifierString = `${modifier}`;
          if (modifier > 0) {
            modifierString = `+${modifier}`;
          }
          return (
            <div key={ability} className="m-4">
              <div className="flex justify-between">
                <h3 className="text-lg">
                  {ability.charAt(0).toUpperCase() + ability.slice(1)}
                </h3>
                <div>
                  <label className="mr-2">
                    Score:<span className="mr-1">{base}</span>
                  </label>
                  <label>
                    Modifier:
                    <span className="mr-1">{modifierString}</span>
                  </label>
                </div>
              </div>
              {editable ? (
                <div>
                  <div key={ability} className="flex my-2">
                    <label className="mr-1">
                      Base:
                      <input
                        className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300 w-10 ml-1"
                        type="number"
                        name={ability}
                        value={score.base}
                        onChange={(e) =>
                          setAbilities((prev) => ({
                            ...prev,
                            [ability]: {
                              ...prev[ability],
                              base: parseInt(e.target.value, 10),
                            },
                          }))
                        }
                      />
                    </label>
                    <label className="mr-1">
                      Adjustments:
                      <span className="w-10 ml-1">
                        {subSpeciesAdjustment + score.situationalAdjustment}
                      </span>
                    </label>
                    <label className="mr-1">
                      Override:
                      <input
                        className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300 w-10 ml-1"
                        type="number"
                        name={ability}
                        value={score.override}
                        onChange={(e) =>
                          setAbilities((prev) => ({
                            ...prev,
                            [ability]: {
                              ...prev[ability],
                              override: e.target.value,
                            },
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
