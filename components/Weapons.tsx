import React, { useState } from 'react';
import { Weapon, Character } from '../domain';
import { LockEditButton } from './reusable/LockEditButton';

interface PropTypes {}

export const Weapons: React.FC<PropTypes> = ({}) => {
  const [editable, setEditable] = useState(false);
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  return (
    <div className="box-outline-spacing">
      <div className="flex w-full justify-between">
        <h2 className="text-xl">Weapons</h2>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>
      {weapons.map((weapon, index) =>
        weapon.editable ? (
          <div key={index}>
            <input type="text" value={weapon.name} onChange={(e) => {}} />
          </div>
        ) : (
          <div key={index}>
            <span>{weapon.name}:</span>
            <button onClick={() => {}}>Roll Attack</button>
            <button onClick={() => {}}>Edit</button>
          </div>
        )
      )}
      <button onClick={() => {}}>Add Weapon</button>
    </div>
  );
};
