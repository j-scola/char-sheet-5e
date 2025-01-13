import React from 'react';
import { Weapon, Character } from '../data-models';

interface PropTypes {
  weapons: Weapon[];
  handleRoll: (modifier: number) => void;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}

export const Weapons: React.FC<PropTypes> = ({
  weapons,
  handleRoll,
  setCharacter,
}) => {
  const toggleEditable = (index: number) => {
    setCharacter((prev) => ({
      ...prev,
      weapons: prev.weapons.map((w, i) =>
        i === index ? { ...w, editable: !w.editable } : w
      ),
    }));
  };

  return (
    <div>
      <h2>Weapons</h2>
      {weapons.map((weapon, index) =>
        weapon.editable ? (
          <div key={index}>
            <input
              type="text"
              value={weapon.name}
              onChange={(e) =>
                setCharacter((prev) => ({
                  ...prev,
                  weapons: prev.weapons.map((w, i) =>
                    i === index ? { ...w, name: e.target.value } : w
                  ),
                }))
              }
            />
            <button
              onClick={() => {
                toggleEditable(index);
              }}
            >
              Lock
            </button>
          </div>
        ) : (
          <div key={index}>
            <span>{weapon.name}:</span>
            <button onClick={() => handleRoll(weapon.modifier)}>
              Roll Attack
            </button>
            <button onClick={() => toggleEditable(index)}>Edit</button>
          </div>
        )
      )}
      <button
        onClick={() =>
          setCharacter((prev) => ({
            ...prev,
            weapons: [
              ...prev.weapons,
              { name: 'New Weapon', modifier: 0, editable: true },
            ],
          }))
        }
      >
        Add Weapon
      </button>
    </div>
  );
};
