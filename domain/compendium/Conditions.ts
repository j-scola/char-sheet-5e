import { Condition, ConditionEffect, ConditionType } from '../types';
import { Ability } from './Ability';
import { Skill } from './Proficiencies';

export const Conditions: Condition[] = [
  {
    name: 'Blinded',
    description:
      'A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.',
    effects: [
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'disadvantage',
      },
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'advantage-against',
      },
      {
        type: ConditionType.Perception,
        modifierValue: 0,
        modifierType: 'auto-fail',
      },
    ],
  },
  {
    name: 'Charmed',
    description:
      'A charmed creature can’t attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.',
    effects: [
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'restricted',
      },
      {
        type: ConditionType.Social,
        modifierValue: 0,
        modifierType: 'advantage-against',
      },
    ],
  },
  {
    name: 'Deafened',
    description:
      'A deafened creature can’t hear and automatically fails any ability check that requires hearing.',
    effects: [
      {
        type: ConditionType.Perception,
        modifierValue: 0,
        modifierType: 'auto-fail',
      },
    ],
  },
  {
    name: 'Frightened',
    description:
      'A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear.',
    effects: [
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'disadvantage',
      },
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'restricted',
      },
    ],
  },
  {
    name: 'Grappled',
    description:
      'A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
    ],
  },
  {
    name: 'Incapacitated',
    description: 'An incapacitated creature can’t take actions or reactions.',
    effects: [
      {
        type: ConditionType.Actions,
        modifierValue: 0,
        modifierType: 'override',
      },
    ],
  },
  {
    name: 'Invisible',
    description:
      'An invisible creature is impossible to see without the aid of magic or special senses. For the purpose of hiding, the creature is heavily obscured. The creature’s location can’t be discerned by nonmagical means.',
    effects: [
      {
        type: ConditionType.Skills,
        skill: Skill.Stealth,
        modifierValue: 0,
        modifierType: 'advantage',
      },
    ],
  },
  {
    name: 'Paralyzed',
    description:
      'A paralyzed creature is incapacitated and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage, and any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
    ],
  },
  {
    name: 'Petrified',
    description:
      'A petrified creature is transformed, along with any nonmagical objects it is wearing or carrying, into a solid inanimate substance (usually stone). The creature is incapacitated, can’t move or speak, and is unaware of its surroundings. The creature automatically fails Strength and Dexterity saving throws.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.SavingThrows,
        modifierValue: 0,
        modifierType: 'auto-fail',
        ability: Ability.Strength,
      },
      {
        type: ConditionType.SavingThrows,
        modifierValue: 0,
        modifierType: 'auto-fail',
        ability: Ability.Dexterity,
      },
    ],
  },
  {
    name: 'Poisoned',
    description:
      'A poisoned creature has disadvantage on attack rolls and ability checks.',
    effects: [
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'disadvantage',
      },
      ...Object.entries(Skill).map(
        ([label, value]) =>
          ({
            type: ConditionType.Skills,
            modifierValue: 0,
            skill: value,
            modifierType: 'disadvantage',
          }) as ConditionEffect
      ),
    ],
  },
  {
    name: 'Restrained',
    description:
      'A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.SavingThrows,
        modifierValue: 0,
        modifierType: 'disadvantage',
        ability: Ability.Dexterity,
      },
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'advantage-against',
      },
    ],
  },
  {
    name: 'Stunned',
    description:
      'A stunned creature is incapacitated, can’t move, and can’t take actions or reactions. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.Actions,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'advantage-against',
      },
    ],
  },
  {
    name: 'Unconscious',
    description:
      'An unconscious creature is incapacitated, can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage, and any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
    effects: [
      {
        type: ConditionType.Movement,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.Actions,
        modifierValue: 0,
        modifierType: 'override',
      },
      {
        type: ConditionType.Attacks,
        modifierValue: 0,
        modifierType: 'advantage',
      },
    ],
  },
];
