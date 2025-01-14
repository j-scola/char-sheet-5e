import React from 'react';
import { DndAbilityScores, Character, Species } from '../domain';

interface AbilityScoresProps {
  abilities: DndAbilityScores;
  species: Species;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}
export const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilities,
  species,
  setCharacter,
}) => {
  const toggleEditable = () => {
    setCharacter((prev) => ({
      ...prev,
      abilities: { ...prev.abilities, editable: !prev.abilities.editable },
    }));
  };

  return (
    <div>
      <h2>Abilities</h2>
      {abilities.editable ? (
        <div>
          {Object.entries(abilities).map(([ability, score]) => {
            return ability !== 'editable' ? (
              <div>
                <h3 className="text-lg">
                  {ability.charAt(0).toUpperCase() + ability.slice(1)}
                </h3>
                <div key={ability} className="flex my-2">
                  <label className="mr-1">
                    Base:
                    <input
                      className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300 w-10 ml-1"
                      type="number"
                      name={ability}
                      value={score.base}
                      onChange={(e) =>
                        setCharacter((prev) => {
                          return {
                            ...prev,
                            abilities: {
                              ...prev.abilities,
                              [ability]: {
                                ...prev.abilities[ability],
                                base: parseInt(e.target.value, 10),
                              },
                            },
                          };
                        })
                      }
                    />
                  </label>
                  <label className="mr-1">
                    Adjustments:
                    <span className="w-10 ml-1">
                      {score.speciesAdjustment + score.situationalAdjustment}
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
                        setCharacter((prev) => ({
                          ...prev,
                          abilities: {
                            ...prev.abilities,
                            [ability]: {
                              ...prev.abilities[ability],
                              override: e.target.value,
                            },
                          },
                        }))
                      }
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div key={ability}></div>
            );
          })}
          <button onClick={toggleEditable}>Lock</button>
        </div>
      ) : (
        <div>
          <h2>Abilities</h2>
          {Object.entries(abilities).map(([ability, score]) => {
            if (ability === 'editable') return null;

            const base =
              score.base +
              score.speciesAdjustment +
              score.situationalAdjustment;

            const modifier = Math.floor((base - 10) / 2);
            let modifierString = `${modifier}`;
            if (modifier > 0) {
              modifierString = `+${modifier}`;
            }

            return (
              <div key={ability} className="flex ">
                <label className="mr-2">
                  {ability.charAt(0).toUpperCase() +
                    ability.slice(1) +
                    ' Score'}
                  :<span className="mr-1">{base}</span>
                </label>
                <label>
                  Modifier:
                  <span className="mr-1">{modifierString}</span>
                </label>
              </div>
            );
          })}
          <button onClick={toggleEditable}>Edit</button>
        </div>
      )}
    </div>
  );
};
