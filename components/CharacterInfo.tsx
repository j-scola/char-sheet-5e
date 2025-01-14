import React from 'react';
import { Character, EmptySubSpecies } from '../domain';
import { SpeciesOfFaerun } from '../domain/5e';

const classOptions = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
];

interface CharacterInfoProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}
export const CharacterInfo: React.FC<CharacterInfoProps> = ({
  character,
  setCharacter,
}) => {
  return (
    <div className="my-4">
      <h2 className="text-lg my-2">Character Information</h2>
      <label className="mr-2">
        <span className="mr-1">Name:</span>
        <input
          className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
          type="text"
          name="name"
          value={character.name}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
      </label>

      <label className="mr-2">
        <span className="mr-1">Species:</span>
        <select
          className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
          name="species"
          value={character.species.name}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              species: SpeciesOfFaerun.find(
                (value) => value.name === e.target.value
              ),
              subSpecies: EmptySubSpecies,
            }));
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
          value={character.subSpecies.name}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              subSpecies: character.species.subRaces.find(
                (value) => value.name === e.target.value
              ),
            }));
          }}
        >
          <option value="">Select Sub-Species</option>
          {character.species.subRaces.map((species) => (
            <option key={species.name} value={species.name}>
              {species.name}
            </option>
          ))}
        </select>
      </label>

      <label className="mr-2">
        <span className="mr-1">Class:</span>
        <select
          className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
          name="class"
          value={character.class}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              class: e.target.value,
            }));
          }}
        >
          <option value="">Select Class</option>
          {classOptions.map((characterClass) => (
            <option key={characterClass} value={characterClass}>
              {characterClass}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
