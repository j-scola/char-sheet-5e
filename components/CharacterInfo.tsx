import React from 'react';
import { Character } from '../data-models';
import { Races } from '../data-models/5e/Races';
import { EmptySubRace } from '../data-models/Race';

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
    <div>
      <h2>Character Information</h2>
      <label>
        Name:
        <input
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

      <label>
        Race:
        <select
          name="race"
          value={character.race.name}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              race: Races.find((value) => value.name === e.target.value),
              subrace: EmptySubRace,
            }));
          }}
        >
          <option value="">Select Race</option>
          {Races.map((race) => (
            <option key={race.name} value={race.name}>
              {race.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Sub-race:
        <select
          name="subrace"
          value={character.subRace.name}
          onChange={(e) => {
            setCharacter((prev) => ({
              ...prev,
              subRace: character.race.subRaces.find(
                (value) => value.name === e.target.value
              ),
            }));
          }}
        >
          <option value="">Select Sub-race</option>
          {character.race.subRaces.map((race) => (
            <option key={race.name} value={race.name}>
              {race.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Class:
        <select
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
