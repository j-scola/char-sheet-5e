import React, { useState } from 'react';
import { DndClass, DndSubclass } from '../domain';
import { Classes } from '../domain/5e/Classes';
import { LockEditButton } from './reusable/LockEditButton';
import { ChevronToggle } from './reusable/ChevronToggle';

export const DndClassSelector: React.FC<{
  dndClass: DndClass;
  setDndClass: React.Dispatch<React.SetStateAction<DndClass>>;
}> = ({ dndClass, setDndClass }) => {
  const [editable, setEditable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="box-outline-spacing">
      <div className="w-full  flex justify-between">
        <div className="flex items-center">
          <ChevronToggle expanded={expanded} setExpanded={setExpanded} />
          <h2 className="text-xl">Class</h2>
        </div>
        <div>
          <label className="mr-2">
            {editable ? (
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
            ) : (
              <span>{dndClass.name || 'none'}</span>
            )}
          </label>
        </div>
        <LockEditButton editable={editable} setEditable={setEditable} />
      </div>
      {expanded ? (
        <div>
          <div className="flex-col">
            <h3 className="text-lg">Description: </h3>
            <p>{dndClass.description}</p>
          </div>
          <div className="flex-col">
            <h3 className="text-lg">Hit Dice:</h3>
            <span>{`1d${dndClass.hitDice}`}</span>
          </div>
          <div className="flex-col">
            <h3 className="text-lg">Saving Throws:</h3>
            <span>{dndClass.savingThrowProficiencies.join(', ')}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
