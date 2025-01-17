import React from 'react';
import { useState } from 'react';
import { AbilityScores } from './AbilityScores';
import {
  Character,
  DndAbilityScores,
  EmptyAbilityScores,
  EmptyCharacter,
  EmptySpecies,
  Species,
  SkillProficiency,
  EmptySubSpecies,
  SubSpecies,
  SkillProficiencies,
  DndSubclass,
  EmptyDndSubclass,
  ItemInventory,
  EmptyInventory,
} from '../domain';
import { CharacterInfo } from './CharacterInfo';
import { Traits } from './Traits';
import { Proficiencies } from './Proficiencies';
import { DndClass, EmptyDndClass } from '../domain/types/character/DndClass';
import { DndClassSelector } from './DndClassSelector';
import { SpeciesSelector } from './SpeciesSelector';
import { Inventory } from './Inventory';
import { SavingThrows } from './SavingThrows';
import { getCalculatedFields } from '../lib/getCalculatedFields';
import { ArmorClass } from './ArmorClass';

export const CharacterSheet: React.FC<{
  sendToChat: (message: string) => void;
}> = ({ sendToChat }) => {
  const [character, setCharacter] = useState<Character>(EmptyCharacter);
  const [abilities, setAbilities] =
    useState<DndAbilityScores>(EmptyAbilityScores);
  const [dndClass, setDndClass] = useState<DndClass>(EmptyDndClass);
  const [dndSubclass, setDndSubclass] = useState<DndSubclass>(EmptyDndSubclass);
  const [species, setSpecies] = useState<Species>(EmptySpecies);
  const [subSpecies, setSubSpecies] = useState<SubSpecies>(EmptySubSpecies);
  const [proficiencies, setProficiencies] =
    useState<SkillProficiency[]>(SkillProficiencies);

  const [inventory, setInventory] = useState<ItemInventory>(EmptyInventory);

  const { abilityModifiers } = getCalculatedFields(
    abilities,
    dndClass,
    subSpecies,
    character
  );

  return (
    <div>
      <div className="p-2">
        <CharacterInfo character={character} setCharacter={setCharacter} />
        <SpeciesSelector
          species={species}
          setSpecies={setSpecies}
          subSpecies={subSpecies}
          setSubSpecies={setSubSpecies}
        ></SpeciesSelector>
        <DndClassSelector dndClass={dndClass} setDndClass={setDndClass} />
      </div>
      <div className="flex">
        <div className="w-1/3 p-2">
          <AbilityScores
            abilities={abilities}
            species={species}
            subSpecies={subSpecies}
            setAbilities={setAbilities}
          />
        </div>
        <div className="w-1/5 p-2">
          <SavingThrows
            abilityModifiers={abilityModifiers}
            dndClass={dndClass}
            proficiencyBonus={character.level.proficiencyBonus}
            sendToChat={sendToChat}
          />
        </div>
        <div className="w-1/5 p-2">
          <ArmorClass
            abilityModifiers={abilityModifiers}
            armor={inventory.equipped.armor}
            shield={inventory.equipped.shield}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 p-2">
          <Proficiencies
            abilityModifiers={abilityModifiers}
            proficiencies={proficiencies}
            level={character.level}
            setProficiencies={setProficiencies}
            sendToChat={sendToChat}
          />
        </div>
        <div className="w-1/2 p-2">
          <Inventory inventory={{}}></Inventory>
        </div>
      </div>
      <Traits dndClass={dndClass} species={species} subSpecies={subSpecies} />
    </div>
  );
};
