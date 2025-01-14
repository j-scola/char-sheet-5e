import { Abilities } from '../5e/Abilities';
import { Dice } from './Dice';

export interface DndSubclass {
  name: string;
  description: string;
  levelRequirements: number;
  features: DndSubclassFeature[];
}

export interface DndSubclassFeature {
  name: string;
  description: string;
  level: number;
}

export interface DndClass {
  name: string;
  description: string;
  hitDice: Dice;
  primaryAbility: Abilities;
  savingThrowProficiencies: Abilities[];
  armorProficiencies: string[];
  weaponProficiencies: string[];
  toolProficiencies?: string[];
  skillProficiencies: string[];
  startingEquipment: string[];
  features: {
    name: string;
    description: string;
    level: number;
  }[];
  spellcasting?: {
    hasSpellcasting: boolean;
    ability: string;
    spellsKnown?: number[];
    spellList?: string[];
  };
  subclasses?: DndSubclass[];
}

export const EmptyDndClass: DndClass = {
  name: '',
  description: '',
  hitDice: Dice.D10,
  primaryAbility: Abilities.Strength,
  savingThrowProficiencies: [],
  armorProficiencies: [],
  weaponProficiencies: [],
  skillProficiencies: [],
  startingEquipment: [],
  features: [],
  subclasses: [],
};
