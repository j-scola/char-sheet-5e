import React from 'react';
import { useState } from 'react';
import { AbilityScores } from './AbilityScores';
import { Weapons } from './Weapons';
import { Character, EmptyCharacter } from '../data-models';
import { rollDice } from '../utils/rollDice';
import { CharacterInfo } from './CharacterInfo';

const CharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<Character>(EmptyCharacter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoll = (modifier: number) => {
    const roll = rollDice(20) + modifier;
    alert(`You rolled: ${roll}`);
  };

  return (
    <div>
      <CharacterInfo character={character} setCharacter={setCharacter} />
      <AbilityScores
        abilities={character.abilities}
        setCharacter={setCharacter}
      />
      <Weapons
        weapons={character.weapons}
        handleRoll={handleRoll}
        setCharacter={setCharacter}
      />

      <h2>Saving Throws</h2>
      {character.savingThrows.map((savingThrow, index) => (
        <div key={index}>
          <span>{savingThrow.name}:</span>
          <button onClick={() => handleRoll(savingThrow.modifier)}>
            Roll Saving Throw
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          setCharacter((prev) => ({
            ...prev,
            savingThrows: [
              ...prev.savingThrows,
              { name: 'New Saving Throw', modifier: 0 },
            ],
          }))
        }
      >
        Add Saving Throw
      </button>

      <h2>Proficiencies</h2>
      <ul>
        {character.proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          setCharacter((prev) => ({
            ...prev,
            proficiencies: [...prev.proficiencies, 'New Proficiency'],
          }))
        }
      >
        Add Proficiency
      </button>
    </div>
  );
};

export default CharacterSheet;
