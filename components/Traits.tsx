import React from 'react';
import { Character, DndClass, Species, SubSpecies } from '../domain';

interface TraitsProps {
  dndClass: DndClass;
  species: Species;
  subSpecies: SubSpecies;
}

export const Traits = ({ dndClass, species, subSpecies }) => {
  return (
    <div className="w-1/3 border-blue border-2 p-1 m-1">
      <h2 className="text-xl">Traits</h2>
      <ul>
        {subSpecies.traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </div>
  );
};
