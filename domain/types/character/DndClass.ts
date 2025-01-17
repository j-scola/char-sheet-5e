import { Ability } from '../../compendium/Ability';
import { Dice } from '../Dice';

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
  primaryAbility: Ability;
  savingThrowProficiencies: Ability[];
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
  primaryAbility: Ability.Strength,
  savingThrowProficiencies: [],
  armorProficiencies: [],
  weaponProficiencies: [],
  skillProficiencies: [],
  startingEquipment: [],
  features: [],
  subclasses: [],
};

export const EmptyDndSubclass: DndSubclass = {
  name: '',
  description: '',
  levelRequirements: 0,
  features: [],
};
