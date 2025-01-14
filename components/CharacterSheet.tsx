import React from 'react';
import { useState } from 'react';
import { AbilityScores } from './AbilityScores';
import { Weapons } from './Weapons';
import {
  Character,
  DndAbilityScores,
  EmptyAbilityScores,
  EmptyCharacter,
  EmptySpecies,
  Species,
  SkillProficiency,
  Weapon,
  EmptySubSpecies,
  SubSpecies,
  SkillProficiencies,
} from '../domain';
import { rollDice } from '../utils/rollDice';
import { CharacterInfo } from './CharacterInfo';
import { Traits } from './Traits';
import { Proficiencies } from './Proficiencies';
import { DndClass, EmptyDndClass } from '../domain/types/DndClass';
import { DndClassSelector } from './DndClassSelector';
import { SpeciesSelector } from './SpeciesSelector';

const CharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<Character>(EmptyCharacter);
  const [abilities, setAbilities] =
    useState<DndAbilityScores>(EmptyAbilityScores);

  const [dndClass, setDndClass] = useState<DndClass>(EmptyDndClass);
  const [species, setSpecies] = useState<Species>(EmptySpecies);
  const [subSpecies, setSubSpecies] = useState<SubSpecies>(EmptySubSpecies);
  const [proficiencies, setProficiencies] =
    useState<SkillProficiency[]>(SkillProficiencies);

  const handleRoll = (modifier: number) => {
    const roll = rollDice(20) + modifier;
    alert(`You rolled: ${roll}`);
  };

  return (
    <div>
      <CharacterInfo character={character} setCharacter={setCharacter} />
      <SpeciesSelector
        species={species}
        setSpecies={setSpecies}
        subSpecies={subSpecies}
        setSubSpecies={setSubSpecies}
      ></SpeciesSelector>
      <DndClassSelector dndClass={dndClass} setDndClass={setDndClass} />
      <AbilityScores
        abilities={abilities}
        species={species}
        setAbilities={setAbilities}
      />
      <Weapons />
      <Proficiencies
        abilities={abilities}
        proficiencies={proficiencies}
        level={character.level}
        setProficiencies={setProficiencies}
      />
      <Traits dndClass={dndClass} species={species} subSpecies={subSpecies} />
    </div>
  );
};

export default CharacterSheet;
