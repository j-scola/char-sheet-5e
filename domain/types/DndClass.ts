import { AbilityScores } from '../5e/Abilities';
import { Dice } from './Dice';

export interface DndSubclass {
  name: string; // Name of the subclass
  description: string; // Brief description of the subclass
  levelRequirements: number; // The level at which the subclass is chosen
  features: DndSubclassFeature[]; // List of features unique to the subclass
}

export interface DndSubclassFeature {
  name: string; // Name of the feature
  description: string; // Brief description of the feature
  level: number; // Level at which the feature is gained
}

export interface DndClass {
  name: string; // Name of the class
  description: string; // Brief description of the class
  hitDice: Dice; // Hit dice type (e.g., d8, d10)
  primaryAbility: AbilityScores; // Primary ability score (e.g., Strength, Dexterity, etc.)
  savingThrowProficiencies: AbilityScores[]; // List of saving throws (e.g., "Strength", "Constitution")
  armorProficiencies: string[]; // List of armor proficiencies (e.g., "Light armor", "Shields")
  weaponProficiencies: string[]; // List of weapon proficiencies (e.g., "Simple weapons", "Longswords")
  toolProficiencies?: string[]; // Optional list of tool proficiencies
  skillProficiencies: string[]; // List of skill proficiencies (e.g., "Athletics", "Stealth")
  startingEquipment: string[]; // Starting equipment options or requirements
  features: {
    name: string;
    description: string;
    level: number;
  }[]; // List of class features gained at different levels
  spellcasting?: {
    hasSpellcasting: boolean; // Whether the class has spellcasting abilities
    ability: string; // AbilityScores score for spellcasting (e.g., "Wisdom", "Charisma")
    spellsKnown?: number[]; // Optional array of spell slots per spell level
    spellList?: string[]; // Optional list of spells known or available
  };
  subclasses?: DndSubclass[]; // Optional list of subclass options or archetypes
}
