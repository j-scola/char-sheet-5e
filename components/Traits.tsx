import React from 'react';
import { Character } from '../domain';

interface TraitsProps {
  character: Character;
}

export const Traits = ({ character }) => {
  return (
    <div>
      <h2>Traits</h2>
      <ul>
        {character.subSpecies.traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </div>
  );
};
