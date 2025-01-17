import React from 'react';
import { Character, DndClass, Species, SubSpecies } from '../domain';

interface TraitsProps {
  dndClass: DndClass;
  species: Species;
  subSpecies: SubSpecies;
}

export const Traits = ({ dndClass, species, subSpecies }) => {
  return (
    <div className="box-outline-spacing">
      <h2 className="text-xl">Traits</h2>
      <ul>
        {subSpecies.traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
    </div>
  );
};
