import React from 'react';
import { useState } from 'react';
import { AbilityScores } from './AbilityScores';
import { Weapons } from './Weapons';
import { Character, EmptyCharacter } from '../domain';
import { rollDice } from '../utils/rollDice';
import { CharacterInfo } from './CharacterInfo';
import { Traits } from './Traits';

const CharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<Character>(EmptyCharacter);
  const handleRoll = (modifier: number) => {
    const roll = rollDice(20) + modifier;
    alert(`You rolled: ${roll}`);
  };

  return (
    <div>
      <CharacterInfo character={character} setCharacter={setCharacter} />
      <AbilityScores
        abilities={character.abilities}
        species={character.species}
        setCharacter={setCharacter}
      />
      <Weapons
        weapons={character.weapons}
        handleRoll={handleRoll}
        setCharacter={setCharacter}
      />

      <h2>Proficiencies</h2>
      <ul>
        {character.proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>

      <Traits character={character} />
    </div>
  );
};

export default CharacterSheet;
