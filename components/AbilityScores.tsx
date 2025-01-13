import React from 'react';
import { Abilities, Character } from '../data-models';

interface AbilityScoresProps {
  abilities: Abilities;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}
export const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilities,
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
              <div key={ability}>
                <label>
                  {ability.charAt(0).toUpperCase() + ability.slice(1)}:
                  <input
                    type="number"
                    name={ability}
                    value={score}
                    onChange={(e) =>
                      setCharacter((prev) => ({
                        ...prev,
                        abilities: {
                          ...prev.abilities,
                          [ability]: parseInt(e.target.value, 10),
                        },
                      }))
                    }
                  />
                </label>
                <div>Modifier: {Math.floor((score - 10) / 2)}</div>
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
          {Object.entries(abilities).map(([ability, score]) => (
            <div key={ability} className="flex">
              <label>
                {ability.charAt(0).toUpperCase() + ability.slice(1)}:
                <span>{score}</span>
              </label>
              <div>Modifier: {Math.floor((score - 10) / 2)}</div>
            </div>
          ))}
          <button onClick={toggleEditable}>Edit</button>
        </div>
      )}
    </div>
  );
};
