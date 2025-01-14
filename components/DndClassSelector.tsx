import React, { useState } from 'react';
import { DndClass, Weapon } from '../domain';
import { Classes } from '../domain/5e/Classes';
import { LockEditButton } from './reusable/LockEditButton';

type DndClassProps = {
  dndClass: DndClass;
  setDndClass: React.Dispatch<React.SetStateAction<DndClass>>;
};
export const DndClassSelector: React.FC<DndClassProps> = ({
  dndClass,
  setDndClass,
}) => {
  const [editable, setEditable] = useState(false);
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  return (
    <div className="w-full border-blue border-2 px-1 py-2 m-1 flex justify-between">
      <div>
        <label className="mr-2">
          <span className="mr-1">Class:</span>
          <select
            className="outline-black outline outline-1 rounded focus:outline-none focus:ring focus:ring-violet-300"
            name="class"
            value={dndClass.name}
            onChange={(e) => {
              setDndClass(() =>
                Classes.find((value) => value.name === e.target.value)
              );
            }}
          >
            <option value="">Select Class</option>
            {Classes.map((dndClass) => (
              <option key={dndClass.name} value={dndClass.name}>
                {dndClass.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <LockEditButton editable={editable} setEditable={setEditable} />
    </div>
  );
};
