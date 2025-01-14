import React, { useState } from 'react';
import { DndClass, Weapon } from '../domain';
import { Classes } from '../domain/5e/Classes';
import { LockEditButton } from './reusable/LockEditButton';
import { ChevronToggle } from './reusable/ChevronToggle';

type DndClassProps = {
  dndClass: DndClass;
  setDndClass: React.Dispatch<React.SetStateAction<DndClass>>;
};
export const DndClassSelector: React.FC<DndClassProps> = ({
  dndClass,
  setDndClass,
}) => {
  const [editable, setEditable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full border-blue border-2 px-1 py-2 m-1 ">
      <div className="w-full  flex justify-between">
        <div className="flex items-center">
          <ChevronToggle expanded={expanded} setExpanded={setExpanded} />
          <h2 className="text-xl">Class</h2>
        </div>
        <div>
          <label className="mr-2">
            <span className="ml-3 mr-1">Class:</span>
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
          <div>
            <span>Description: </span>
            <span>{dndClass.description}</span>
          </div>
          <div>
            <span>Hit Dice</span>
            <span>{`1d${dndClass.hitDice}`}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
