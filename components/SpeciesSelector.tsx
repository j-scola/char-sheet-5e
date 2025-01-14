import React, { useState } from 'react';
import { Species, SpeciesOfFaerun, SubSpecies } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';

type SpeciesProps = {
  species: Species;
  setSpecies: React.Dispatch<React.SetStateAction<Species>>;
  subSpecies: SubSpecies;
  setSubSpecies: React.Dispatch<React.SetStateAction<SubSpecies>>;
};

export const SpeciesSelector: React.FC<SpeciesProps> = ({
  species,
  setSpecies,
  subSpecies,
  setSubSpecies,
}) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="w-full border-blue border-2 px-1 py-2 m-1 flex justify-between">
      <div>
        <label className="mr-2">
          <span className="mr-1">Species:</span>
          <select
            className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
            name="species"
            value={species.name}
            onChange={(e) => {
              setSpecies((prev) =>
                SpeciesOfFaerun.find((value) => value.name === e.target.value)
              );
            }}
          >
            <option value="">Select Species</option>
            {SpeciesOfFaerun.map((species) => (
              <option key={species.name} value={species.name}>
                {species.name}
              </option>
            ))}
          </select>
        </label>

        <label className="mr-2">
          <span className="mr-1">Sub-Species:</span>
          <select
            className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
            name="subSpecies"
            value={subSpecies.name}
            onChange={(e) => {
              setSubSpecies(() =>
                species.subSpecies.find(
                  (value) => value.name === e.target.value
                )
              );
            }}
          >
            <option value="">Select Sub-Species</option>
            {species.subSpecies.map((species) => (
              <option key={species.name} value={species.name}>
                {species.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <LockEditButton editable={editable} setEditable={setEditable} />
    </div>
  );
};
