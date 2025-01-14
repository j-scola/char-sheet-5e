import React from 'react';
import CharacterSheet from '../components/CharacterSheet';

export default function Home() {
  return (
    <div className="m-4 max-w-6xl">
      <h1 className="text-xl">D&D 5e Character Sheet</h1>
      <CharacterSheet />
    </div>
  );
}
