import React, { useState } from 'react';
import { roll } from '../../../utils/rollDice';
import Image from 'next/image';
import { SendToChat } from '../../../domain';

export const RollDice: React.FC<{
  sides: number;
  rollingFor: string;
  modifier: number;
  diceCount?: number;
  source?: string;
  sendToChat: SendToChat;
}> = ({ sides, modifier, diceCount = 1, source, sendToChat }) => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    sendToChat(roll(modifier, diceCount, sides), source);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  return (
    <button
      className={`flex justify-center items-center cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`${rotate ? 'animate-spin' : ''} h-6`}>
        <Image
          src="/noun-d20-6524196.svg"
          alt="roll D20"
          height={20}
          width={20}
        />
      </div>
    </button>
  );
};
