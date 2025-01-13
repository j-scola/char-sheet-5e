import React from 'react';
import { Character } from '../data-models';

interface TraitsProps {
  character: Character;
}

export const Traits = ({ character }) => {
  return (
    <div>
      <h2>Traits</h2>
      <ul>
        {character.subRace.traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </div>
  );
};
