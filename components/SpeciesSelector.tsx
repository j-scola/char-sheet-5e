import React, { useState } from 'react';
import { Species, SpeciesOfFaerun, SubSpecies } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';
import { ChevronToggle } from './reusable/ChevronToggle';

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
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full border-blue border-2 px-1 py-2 m-1 ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <ChevronToggle expanded={expanded} setExpanded={setExpanded} />
          <h2 className="text-xl">Species</h2>
        </div>
        <div>
          <label className="mr-2">
            <span className="mr-1">Species:</span>
            {editable ? (
              <select
                className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
                name="species"
                value={species.name}
                onChange={(e) => {
                  setSpecies((prev) =>
                    SpeciesOfFaerun.find(
                      (value) => value.name === e.target.value
                    )
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
            ) : (
              <span>{species.name || 'none'}</span>
            )}
          </label>

          <label className="mr-2">
            <span className="mr-1">Sub-Species:</span>
            {editable ? (
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
            ) : (
              <span>{subSpecies.name || 'none'}</span>
            )}
          </label>
        </div>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>
      {expanded ? (
        <div>
          <div className="flex">
            <span>Ability Score Modifiers:</span>
            {Object.entries(subSpecies.abilityModifiers).map(([name, val]) => (
              <div key={Math.random()}>
                <span>{name}:</span>
                <span>+{val}</span>
              </div>
            ))}
          </div>
          <div>
            <span>Size:</span>
            <span>{subSpecies.size}</span>
          </div>
          <div>
            <span>Speed:</span>
            <span>{subSpecies.speed}</span>
          </div>
          <div>
            <span>Traits:</span>
            <span>
              {subSpecies.traits.map((trait) => (
                <span key={Math.random()}>{trait}</span>
              ))}
            </span>
          </div>
          <div>
            <span>Languages:</span>
            <span>
              {subSpecies.languages.map((language) => (
                <span key={Math.random()}>{language}</span>
              ))}
            </span>
          </div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
