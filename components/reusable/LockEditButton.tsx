import React from 'react';

export const LockEditButton: React.FC<{
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ editable, setEditable }) => {
  return (
    <button
      onClick={() => setEditable(!editable)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
    >
      {editable ? 'Lock' : 'Edit'}
    </button>
  );
};
