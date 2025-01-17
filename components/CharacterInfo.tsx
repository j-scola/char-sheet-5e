import React, { useState } from 'react';
import { Character } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';

interface CharacterInfoProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}
export const CharacterInfo: React.FC<CharacterInfoProps> = ({
  character,
  setCharacter,
}) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="box-outline-spacing">
      <div className="flex w-full justify-between">
        <h2 className="text-xl ">Character Information</h2>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>
      <label className="mr-2">
        <span className="mr-1">Name:</span>
        {editable ? (
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
        ) : (
          character.name
        )}
      </label>
    </div>
  );
};
