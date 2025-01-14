import { Dice } from '../types/Dice';
import { DndClass } from '../types/DndClass';
import { Abilities } from './Abilities';

export const Classes: DndClass[] = [
  {
    name: 'Barbarian',
    description:
      'A fierce warrior of primitive background who can enter a battle rage',
    hitDice: Dice.D12,
    primaryAbility: Abilities.Strength,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Constitution],
    armorProficiencies: ['light', 'medium', 'shield'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: [
      'animal handling',
      'athletics',
      'intimidation',
      'nature',
      'perception',
      'survival',
    ],
    startingEquipment: [
      'greataxe',
      '2 handaxes',
      "explorer's pack",
      '4 javelins',
    ],
    features: [
      {
        name: 'Rage',
        description:
          'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.',
        level: 1,
      },
      {
        name: 'Unarmored Defense',
        description:
          'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier.',
        level: 1,
      },
      {
        name: 'Reckless Attack',
        description:
          'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly.',
        level: 2,
      },
      {
        name: 'Danger Sense',
        description:
          'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.',
        level: 2,
      },
      {
        name: 'Primal Path',
        description:
          'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Path of the Berserker',
        description:
          'For some barbarians, rage is a means to an end— that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being.',
        levelRequirements: 3,
        features: [
          {
            name: 'Frenzy',
            description:
              'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage.',
            level: 3,
          },
          {
            name: 'Mindless Rage',
            description:
              'Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.',
            level: 6,
          },
          {
            name: 'Intimidating Presence',
            description:
              'Beginning at 10th level, you can use your action to frighten someone with your menacing presence.',
            level: 10,
          },
        ],
      },
    ],
  },
];
