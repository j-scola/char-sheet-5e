import React from 'react';
import { DndAbilityScores, Character, Species } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';

interface AbilityScoresProps {
  abilities: DndAbilityScores;
  species: Species;
  setAbilities: React.Dispatch<React.SetStateAction<DndAbilityScores>>;
}
export const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilities,
  species,
  setAbilities,
}) => {
  const toggleEditable = () => {
    setAbilities((prev) => ({
      ...prev,
      editable: !prev.editable,
    }));
  };

  return (
    <div className="w-1/3 border-blue border-2 p-1 m-1">
      <div className="flex justify-between">
        <h2 className="text-xl">Abilities</h2>
        <LockEditButton
          editable={abilities.editable}
          setEditable={() => toggleEditable()}
        />
      </div>
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
        </div>
      )}
    </div>
  );
};
