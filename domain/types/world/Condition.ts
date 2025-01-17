import { Ability, Skill } from '../../compendium';

export enum ConditionType {
  Ability = 'ability',
  Social = 'social',
  Attacks = 'attacks',
  Movement = 'movement',
  SavingThrows = 'saving-throws',
  Skills = 'skills',
  Damage = 'damage',
  Initiative = 'initiative',
  Perception = 'perception',
  Actions = 'actions',
}

export interface ConditionEffect {
  type: ConditionType;
  description?: string;
  ability?: Ability;
  skill?: Skill;
  modifierValue: number;
  modifierType: string;
}

export interface Condition {
  name: string;
  description: string;
  effects: ConditionEffect[];
}
