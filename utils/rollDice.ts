import { Dice } from '../domain';

export const roll = (modifier: number, diceCount: number, sides: Dice) => {
  let rollValue = 0;
  let remainingDice = diceCount;
  let rollLog = [];
  while (remainingDice > 0) {
    const roll = rollDice(sides);
    rollLog.push(roll);
    rollValue += roll;
    remainingDice--;
  }
  const roll = rollValue + modifier;
  const message = `You rolled a ${roll}\n(${rollLog.join(' + ')} + ${modifier})`;
  return message;
};

export const rollDice = (sides: Dice): number =>
  Math.floor(Math.random() * sides) + 1;
