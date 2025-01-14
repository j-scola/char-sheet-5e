import { Species } from '../types/Species';

export const SpeciesOfFaerun: Species[] = [
  {
    name: 'Dwarf',
    subSpecies: [
      {
        name: 'Hill',
        abilityModifiers: {
          constitution: 2,
          wisdom: 1,
        },
        size: 'Medium',
        speed: 25,
        languages: ['Common', 'Dwarvish'],
        traits: [
          'Dwarven Resilience',
          'Dwarven Combat Training',
          'Stonecunning',
          'Dwarven Toughness',
          'Darkvision',
        ],
      },

      {
        name: 'Mountain',
        abilityModifiers: {
          constitution: 2,
          strength: 2,
        },
        size: 'Medium',
        speed: 25,
        languages: ['Common', 'Dwarvish'],
        traits: [
          'Dwarven Resilience',
          'Dwarven Combat Training',
          'Stonecunning',
          'Dwarven Armor Training',
          'Darkvision',
        ],
      },
    ],
  },
  {
    name: 'Elf',
    subSpecies: [
      {
        name: 'High',
        abilityModifiers: {
          dexterity: 2,
          intelligence: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Elvish'],
        traits: [
          'Keen Senses',
          'Fey Ancestry',
          'Trance',
          'High Elf Cantrip',
          'High Elf Weapon Training',
          'Darkvision',
        ],
      },
      {
        name: 'Wood',
        abilityModifiers: {
          dexterity: 2,
          wisdom: 1,
        },
        size: 'Medium',
        speed: 35,
        languages: ['Common', 'Elvish'],
        traits: [
          'Keen Senses',
          'Fey Ancestry',
          'Trance',
          'Mask Of The Wild',
          'Darkvision',
        ],
      },
      {
        name: 'Dark',
        abilityModifiers: {
          dexterity: 2,
          charisma: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Elvish'],
        traits: [
          'Superior Darkvision',
          'Keen Senses',
          'Fey Ancestry',
          'Sunlight Sensitivity',
        ],
      },
    ],
  },
  {
    name: 'Halfling',
    subSpecies: [
      {
        name: 'Lightfoot',
        abilityModifiers: {
          dexterity: 2,
          charisma: 1,
        },
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Halfling'],
        traits: ['Lucky', 'Brave', 'Halfling Nimbleness'],
      },
      {
        name: 'Stout',
        abilityModifiers: {
          dexterity: 2,
          constitution: 1,
        },
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Halfling'],
        traits: ['Lucky', 'Brave', 'Halfling Nimbleness', 'Stout Resilience'],
      },
    ],
  },
  {
    name: 'Human',
    subSpecies: [
      {
        name: 'Standard',
        abilityModifiers: {
          strength: 1,
          dexterity: 1,
          constitution: 1,
          intelligence: 1,
          wisdom: 1,
          charisma: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common'],
        traits: ['Versatility'],
      },
      {
        name: 'Variant',
        abilityModifiers: {
          strength: 1,
          dexterity: 1,
          constitution: 1,
          intelligence: 1,
          wisdom: 1,
          charisma: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common'],
        traits: ['Feat', 'Skill Proficiency'],
      },
    ],
  },
  {
    name: 'Dragonborn',
    subSpecies: [
      {
        name: 'Standard',
        abilityModifiers: {
          strength: 2,
          charisma: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Draconic'],
        traits: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'],
      },
    ],
  },
  {
    name: 'Gnome',
    subSpecies: [
      {
        name: 'Forest',
        abilityModifiers: {
          intelligence: 2,
          dexterity: 1,
        },
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Gnomish'],
        traits: ['Gnome Cunning', 'Darkvision', 'Speak With Small Beasts'],
      },
      {
        name: 'Rock',
        abilityModifiers: {
          intelligence: 2,
          constitution: 1,
        },
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Gnomish'],
        traits: ['Gnome Cunning', 'Darkvision', "Artisan's Expertise"],
      },
    ],
  },
  {
    name: 'Half-Orc',
    subSpecies: [
      {
        name: 'Standard',
        abilityModifiers: {
          strength: 2,
          constitution: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Orc'],
        traits: [
          'Darkvision',
          'Menacing',
          'Relentless Endurance',
          'Savage Attacks',
        ],
      },
    ],
  },
  {
    name: 'Tiefling',
    subSpecies: [
      {
        name: 'Standard',
        abilityModifiers: {
          charisma: 2,
          intelligence: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Infernal'],
        traits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy'],
      },
      {
        name: 'Feral',
        abilityModifiers: {
          dexterity: 2,
          intelligence: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Infernal'],
        traits: [
          'Darkvision',
          'Hellish Resistance',
          'Infernal Legacy',
          'Claws',
        ],
      },
    ],
  },
  {
    name: 'Aasimar',
    subSpecies: [
      {
        name: 'Protector',
        abilityModifiers: {
          charisma: 2,
          wisdom: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Celestial'],
        traits: [
          'Darkvision',
          'Celestial Resistance',
          'Healing Hands',
          'Light Bearer',
          'Radiant Soul',
        ],
      },
      {
        name: 'Scourge',
        abilityModifiers: {
          charisma: 2,
          constitution: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Celestial'],
        traits: [
          'Darkvision',
          'Celestial Resistance',
          'Healing Hands',
          'Light Bearer',
          'Radiant Consumption',
        ],
      },
      {
        name: 'Fallen',
        abilityModifiers: {
          charisma: 2,
          strength: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Celestial'],
        traits: [
          'Darkvision',
          'Celestial Resistance',
          'Healing Hands',
          'Light Bearer',
          'Hellish Rebuke',
        ],
      },
    ],
  },
  {
    name: 'Goliath',
    subSpecies: [
      {
        name: 'Standard',
        abilityModifiers: {
          strength: 2,
          constitution: 1,
        },
        size: 'Medium',
        speed: 30,
        languages: ['Common', 'Giant'],
        traits: [
          'Mountain Born',
          'Powerful Build',
          'Proficiency in Athletics',
          'Stone’s Endurance',
        ],
      },
    ],
  },
];
