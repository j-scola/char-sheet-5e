import { Dice } from '../types/Dice';
import { DndClass } from '../types/character/DndClass';
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
  {
    name: 'Bard',
    description:
      'An inspiring magician whose power echoes the music of creation',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Charisma,
    savingThrowProficiencies: [Abilities.Dexterity, Abilities.Charisma],
    armorProficiencies: ['light'],
    weaponProficiencies: [
      'simple',
      'hand crossbows',
      'longswords',
      'rapiers',
      'shortswords',
    ],
    toolProficiencies: ['three musical instruments'],
    skillProficiencies: [
      'acrobatics',
      'animal handling',
      'arcana',
      'athletics',
      'deception',
      'history',
      'insight',
      'intimidation',
      'medicine',
      'nature',
      'perception',
      'performance',
      'persuasion',
      'religion',
      'sleight of hand',
      'stealth',
    ],
    startingEquipment: ['leather armor', 'rapier', 'lute', "explorer's pack"],
    features: [
      {
        name: 'Bardic Inspiration',
        description:
          'You can inspire others through stirring words or music. As a bonus action, you choose one creature within 60 feet (other than yourself) that can hear you. That creature gains Bardic Inspiration, a d6. The creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.',
        level: 1,
      },
      {
        name: 'Spellcasting',
        description:
          'You can cast spells, drawing on the power of music and inspiration to alter reality. Your spellcasting ability is Charisma.',
        level: 1,
      },
      {
        name: 'Jack of All Trades',
        description:
          'Starting at 2nd level, you can add half your proficiency bonus (rounded down) to any ability check you make that doesn’t already include your proficiency bonus.',
        level: 2,
      },
      {
        name: 'Song of Rest',
        description:
          'Starting at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of a short rest, each of those creatures regains an extra 1d6 hit points.',
        level: 2,
      },
      {
        name: 'Countercharm',
        description:
          'At 6th level, you can use your musical talent to counteract harmful effects that use fear or charm. As an action, you can end one effect on yourself or an ally that is causing the target to be charmed or frightened.',
        level: 6,
      },
    ],
    subclasses: [
      {
        name: 'College of Lore',
        description:
          'Bards of the College of Lore seek to uncover stories and secrets to better understand the world. They enhance their spellcasting with additional knowledge, often taking the role of support and tactician.',
        levelRequirements: 3,
        features: [
          {
            name: 'Cutting Words',
            description:
              'Starting at 3rd level, you can use your reaction to subtract your Bardic Inspiration die from an enemy’s attack roll, ability check, or damage roll.',
            level: 3,
          },
          {
            name: 'Additional Magical Secrets',
            description:
              'At 6th level, you learn two additional spells that you can cast using Bard spells slots, regardless of class.',
            level: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Paladin',
    description:
      'A holy warrior bound to a sacred oath who uses divine magic and martial prowess to protect the innocent and smite the wicked',
    hitDice: Dice.D10,
    primaryAbility: Abilities.Strength,
    savingThrowProficiencies: [Abilities.Wisdom, Abilities.Charisma],
    armorProficiencies: ['light', 'medium', 'heavy', 'shield'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: [
      'athletics',
      'intimidation',
      'medicine',
      'persuasion',
      'religion',
    ],
    startingEquipment: [
      'chain mail',
      'shield',
      'longsword',
      'holy symbol',
      'prayer book',
    ],
    features: [
      {
        name: 'Divine Sense',
        description:
          'You can detect the presence of fiends, undead, and celestial beings within 60 feet of you.',
        level: 1,
      },
      {
        name: 'Lay on Hands',
        description:
          'You can heal a creature you touch for a number of hit points equal to your paladin level × 5.',
        level: 1,
      },
      {
        name: 'Divine Smite',
        description:
          'When you hit a creature with a melee weapon attack, you can expend a spell slot to deal radiant damage.',
        level: 2,
      },
      {
        name: 'Sacred Oath',
        description:
          'At 3rd level, you choose an Oath that binds you to a particular set of tenets.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Oath of Devotion',
        description:
          'Paladins who take the Oath of Devotion swear to protect the good and the righteous, uphold justice, and defend the weak.',
        levelRequirements: 3,
        features: [
          {
            name: 'Sacred Weapon',
            description:
              'At 3rd level, you can use your Channel Divinity to add your Charisma modifier to attack rolls for 1 minute.',
            level: 3,
          },
          {
            name: 'Aura of Devotion',
            description:
              'At 7th level, you and friendly creatures within 10 feet of you are immune to being charmed.',
            level: 7,
          },
        ],
      },
    ],
  },
  {
    name: 'Cleric',
    description:
      'A servant of the divine, drawing power from a god or deity to perform miracles and help others',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Wisdom,
    savingThrowProficiencies: [Abilities.Wisdom, Abilities.Charisma],
    armorProficiencies: ['light', 'medium', 'shield'],
    weaponProficiencies: ['simple'],
    toolProficiencies: [],
    skillProficiencies: [
      'history',
      'insight',
      'medicine',
      'persuasion',
      'religion',
    ],
    startingEquipment: ['mace', 'shield', 'holy symbol', "priest's pack"],
    features: [
      {
        name: 'Spellcasting',
        description:
          'You can cast cleric spells using your Wisdom modifier for your spellcasting ability.',
        level: 1,
      },
      {
        name: 'Divine Domain',
        description:
          'At 1st level, you choose a Divine Domain that grants you additional features and spells.',
        level: 1,
      },
      {
        name: 'Channel Divinity',
        description:
          'At 2nd level, you can use your Channel Divinity to invoke the power of your deity for a powerful effect.',
        level: 2,
      },
      {
        name: 'Divine Intervention',
        description:
          'At 10th level, you can call on your deity for divine intervention to change the course of events.',
        level: 10,
      },
    ],
    subclasses: [
      {
        name: 'Life Domain',
        description:
          'Clerics of the Life Domain focus on healing and protecting the weak and innocent.',
        levelRequirements: 1,
        features: [
          {
            name: 'Blessed Healer',
            description:
              'At 6th level, when you cast a healing spell on someone, they regain additional hit points.',
            level: 6,
          },
        ],
      },
    ],
  },
  {
    name: 'Rogue',
    description:
      'A nimble and stealthy character, skilled in trickery, thievery, and sneaky combat tactics',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Dexterity,
    savingThrowProficiencies: [Abilities.Dexterity, Abilities.Intelligence],
    armorProficiencies: ['light'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: ['thieves tools'],
    skillProficiencies: [
      'acrobatics',
      'athletics',
      'deception',
      'insight',
      'perception',
      'sleight of hand',
      'stealth',
    ],
    startingEquipment: [
      'shortsword',
      '2 daggers',
      'thieves tools',
      'burglar’s pack',
    ],
    features: [
      {
        name: 'Sneak Attack',
        description:
          'Once per turn, you can deal extra damage to a creature you hit with an attack if you have advantage or if another enemy is within 5 feet of the target.',
        level: 1,
      },
      {
        name: 'Cunning Action',
        description:
          'Starting at 2nd level, you can use a bonus action to Dash, Disengage, or Hide.',
        level: 2,
      },
      {
        name: 'Uncanny Dodge',
        description:
          'At 5th level, you can use your reaction to halve the damage from an attack that hits you.',
        level: 5,
      },
      {
        name: 'Evasion',
        description:
          'At 7th level, you can avoid damage from certain area effects by making a Dexterity saving throw.',
        level: 7,
      },
    ],
    subclasses: [
      {
        name: 'Thief',
        description:
          'Rogues who focus on agility and dexterity, using their quickness to outmaneuver enemies and gain the upper hand in stealthy encounters.',
        levelRequirements: 3,
        features: [
          {
            name: 'Fast Hands',
            description:
              'Starting at 3rd level, you can use your bonus action to make a Dexterity (Sleight of Hand) check, use thieves’ tools, or interact with an object.',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Monk',
    description:
      'A martial artist who channels inner energy to fight with unarmed strikes and focus on physical and spiritual discipline',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Dexterity,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Dexterity],
    armorProficiencies: [],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: [
      'acrobatics',
      'athletics',
      'history',
      'insight',
      'religion',
    ],
    startingEquipment: ['quarterstaff', 'simple weapon', 'dungeoneer’s pack'],
    features: [
      {
        name: 'Martial Arts',
        description:
          'Your unarmed strikes use Dexterity instead of Strength for attack and damage rolls.',
        level: 1,
      },
      {
        name: 'Ki',
        description:
          'At 2nd level, you gain access to Ki, which allows you to perform special actions like Step of the Wind or Flurry of Blows.',
        level: 2,
      },
      {
        name: 'Unarmored Movement',
        description:
          'At 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield.',
        level: 2,
      },
      {
        name: 'Deflect Missiles',
        description:
          'At 3rd level, you can use your reaction to deflect or catch a missile when you are hit by one.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Way of the Open Hand',
        description:
          'Monks who follow the Way of the Open Hand seek to perfect their martial arts and use their bodies as tools of unrelenting destruction.',
        levelRequirements: 3,
        features: [
          {
            name: 'Open Hand Technique',
            description:
              'Starting at 3rd level, you can use your martial arts to push or knock a creature prone.',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Fighter',
    description:
      'A skilled warrior who can take on any form of combat, from wielding heavy weapons to tactical maneuvers on the battlefield',
    hitDice: Dice.D10,
    primaryAbility: Abilities.Strength,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Constitution],
    armorProficiencies: ['light', 'medium', 'heavy', 'shield'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: [
      'acrobatics',
      'animal handling',
      'athletics',
      'history',
      'intimidation',
      'perception',
    ],
    startingEquipment: ['chain mail', 'longsword', 'shield', 'explorer’s pack'],
    features: [
      {
        name: 'Second Wind',
        description:
          'You can use a bonus action to regain hit points equal to 1d10 + your fighter level.',
        level: 1,
      },
      {
        name: 'Action Surge',
        description:
          'You can take one additional action on your turn, once per short or long rest.',
        level: 2,
      },
      {
        name: 'Martial Archetype',
        description:
          'At 3rd level, you choose a Martial Archetype that gives you additional features and abilities.',
        level: 3,
      },
      {
        name: 'Improved Second Wind',
        description:
          'At 20th level, you can use your Second Wind as a bonus action, even after you’ve used it.',
        level: 20,
      },
    ],
    subclasses: [
      {
        name: 'Champion',
        description:
          'A fighter who excels in physical prowess, emphasizing critical hits and athletic feats.',
        levelRequirements: 3,
        features: [
          {
            name: 'Improved Critical',
            description:
              'At 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.',
            level: 3,
          },
          {
            name: 'Remarkable Athlete',
            description:
              'At 7th level, you add half your proficiency bonus to any Strength, Dexterity, or Constitution check that doesn’t already use your proficiency bonus.',
            level: 7,
          },
        ],
      },
    ],
  },
  {
    name: 'Druid',
    description:
      'A guardian of nature, able to transform into animals and wield powerful nature-based magic',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Wisdom,
    savingThrowProficiencies: [Abilities.Intelligence, Abilities.Wisdom],
    armorProficiencies: ['light', 'medium', 'shield'],
    weaponProficiencies: [
      'club',
      'dagger',
      'dart',
      'javelin',
      'mace',
      'quarterstaff',
      'sickle',
      'sling',
      'spear',
    ],
    toolProficiencies: ['herbalism kit'],
    skillProficiencies: [
      'animal handling',
      'arcana',
      'insight',
      'medicine',
      'nature',
      'perception',
      'survival',
    ],
    startingEquipment: ['wooden shield', 'scimitar', 'explorer’s pack'],
    features: [
      {
        name: 'Spellcasting',
        description:
          'You can cast druid spells using your Wisdom modifier for your spellcasting ability.',
        level: 1,
      },
      {
        name: 'Wild Shape',
        description:
          'At 2nd level, you can transform into a beast that you have seen before.',
        level: 2,
      },
      {
        name: 'Druid Circle',
        description:
          'At 2nd level, you choose a Druid Circle that grants additional features and abilities.',
        level: 2,
      },
      {
        name: 'Archdruid',
        description:
          'At 20th level, you can use your Wild Shape an unlimited number of times.',
        level: 20,
      },
    ],
    subclasses: [
      {
        name: 'Circle of the Moon',
        description:
          'Druids of the Circle of the Moon are more powerful in their ability to transform into beasts.',
        levelRequirements: 2,
        features: [
          {
            name: 'Combat Wild Shape',
            description:
              'At 2nd level, you can use Wild Shape as a bonus action and transform into more powerful beasts.',
            level: 2,
          },
        ],
      },
    ],
  },
  {
    name: 'Ranger',
    description:
      'A skilled tracker and hunter who specializes in ranged combat and survival in the wilds',
    hitDice: Dice.D10,
    primaryAbility: Abilities.Dexterity,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Dexterity],
    armorProficiencies: ['light', 'medium'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: ['herbalism kit'],
    skillProficiencies: [
      'animal handling',
      'athletics',
      'insight',
      'investigation',
      'nature',
      'perception',
      'stealth',
      'survival',
    ],
    startingEquipment: [
      'longbow',
      'quiver of 20 arrows',
      'two shortswords',
      'explorer’s pack',
    ],
    features: [
      {
        name: 'Favored Enemy',
        description:
          'At 1st level, you choose a type of enemy to gain bonus damage against.',
        level: 1,
      },
      {
        name: 'Natural Explorer',
        description:
          'At 1st level, you are skilled at traveling and surviving in one type of terrain.',
        level: 1,
      },
      {
        name: 'Spellcasting',
        description:
          'At 2nd level, you gain access to ranger spells, using your Wisdom modifier.',
        level: 2,
      },
      {
        name: 'Hunter’s Mark',
        description:
          'At 3rd level, you can use your bonus action to mark a target, dealing extra damage to it.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Hunter',
        description:
          'A ranger focused on combat and tactics, capable of taking down enemies quickly and effectively.',
        levelRequirements: 3,
        features: [
          {
            name: 'Colossus Slayer',
            description:
              'At 3rd level, you deal extra damage to larger creatures, increasing your ability to hunt big targets.',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Sorcerer',
    description:
      'A spellcaster who wields innate magic, either through bloodline, heritage, or force of will',
    hitDice: Dice.D6,
    primaryAbility: Abilities.Charisma,
    savingThrowProficiencies: [Abilities.Constitution, Abilities.Charisma],
    armorProficiencies: [],
    weaponProficiencies: ['simple'],
    toolProficiencies: [],
    skillProficiencies: ['arcana', 'deception', 'insight', 'persuasion'],
    startingEquipment: [
      'light crossbow',
      'quiver of 20 bolts',
      'dagger',
      'explorer’s pack',
    ],
    features: [
      {
        name: 'Spellcasting',
        description:
          'You can cast sorcerer spells using your Charisma modifier for your spellcasting ability.',
        level: 1,
      },
      {
        name: 'Sorcerous Origin',
        description:
          'At 1st level, you choose a Sorcerous Origin that shapes your magical powers.',
        level: 1,
      },
      {
        name: 'Font of Magic',
        description:
          'At 2nd level, you can use Sorcery Points to fuel various magical abilities.',
        level: 2,
      },
      {
        name: 'Metamagic',
        description:
          'At 3rd level, you gain the ability to modify your spells with Metamagic.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Draconic Bloodline',
        description:
          'Your magic is derived from a dragon ancestor, granting you strength and resilience.',
        levelRequirements: 1,
        features: [
          {
            name: 'Draconic Resilience',
            description:
              'At 1st level, you gain resistance to one type of elemental damage and your AC is improved.',
            level: 1,
          },
        ],
      },
    ],
  },
  {
    name: 'Warlock',
    description:
      'A spellcaster who has made a pact with a powerful otherworldly entity for magical powers in exchange for service or power',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Charisma,
    savingThrowProficiencies: [Abilities.Wisdom, Abilities.Charisma],
    armorProficiencies: ['light'],
    weaponProficiencies: ['simple'],
    toolProficiencies: [],
    skillProficiencies: [
      'arcana',
      'deception',
      'history',
      'intimidation',
      'investigation',
      'religion',
    ],
    startingEquipment: [
      'light crossbow',
      'quiver of 20 bolts',
      'dagger',
      'explorer’s pack',
    ],
    features: [
      {
        name: 'Otherworldly Patron',
        description:
          'At 1st level, you choose an Otherworldly Patron, such as a Fiend, Archfey, or Great Old One, which grants you special powers.',
        level: 1,
      },
      {
        name: 'Pact Magic',
        description:
          'At 1st level, you can cast warlock spells using Charisma and you have a limited number of spell slots.',
        level: 1,
      },
      {
        name: 'Eldritch Invocations',
        description:
          'At 2nd level, you gain the ability to learn Eldritch Invocations, special magical abilities that enhance your pact.',
        level: 2,
      },
      {
        name: 'Pact Boon',
        description:
          'At 3rd level, you gain a pact boon that grants you unique abilities based on your pact with your patron.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Pact of the Fiend',
        description:
          'A warlock who has made a pact with a fiendish entity, gaining the ability to deal fire damage and manipulate dark powers.',
        levelRequirements: 1,
        features: [
          {
            name: 'Dark One’s Blessing',
            description:
              'At 1st level, you gain temporary hit points whenever you reduce a hostile creature to 0 hit points.',
            level: 1,
          },
        ],
      },
    ],
  },
  {
    name: 'Wizard',
    description:
      'A spellcaster who relies on knowledge and intellect to wield arcane magic, specializing in a wide array of spells',
    hitDice: Dice.D6,
    primaryAbility: Abilities.Intelligence,
    savingThrowProficiencies: [Abilities.Intelligence, Abilities.Wisdom],
    armorProficiencies: [],
    weaponProficiencies: ['dagger', 'dart', 'sling', 'quarterstaff'],
    toolProficiencies: [],
    skillProficiencies: [
      'arcana',
      'history',
      'insight',
      'investigation',
      'medicine',
      'religion',
    ],
    startingEquipment: ['quarterstaff', 'spellbook', 'explorer’s pack'],
    features: [
      {
        name: 'Spellcasting',
        description:
          'You can cast wizard spells using your Intelligence modifier as your spellcasting ability.',
        level: 1,
      },
      {
        name: 'Arcane Recovery',
        description:
          'Once per day, you can recover expended spell slots during a short rest.',
        level: 1,
      },
      {
        name: 'Arcane Tradition',
        description:
          'At 2nd level, you choose an Arcane Tradition that grants additional magical abilities and options.',
        level: 2,
      },
      {
        name: 'Spell Mastery',
        description:
          'At 18th level, you can cast certain lower-level spells at will without expending spell slots.',
        level: 18,
      },
    ],
    subclasses: [
      {
        name: 'School of Evocation',
        description:
          'A wizard who specializes in manipulating energy to deal damage, often destructive and explosive spells.',
        levelRequirements: 2,
        features: [
          {
            name: 'Evocation Savant',
            description:
              'At 2nd level, you can add your Intelligence modifier to the damage of evocation spells.',
            level: 2,
          },
        ],
      },
    ],
  },
  {
    name: 'Artificer',
    description:
      'A master of magic-infused technology, capable of crafting magical items and using spells to enhance their creations',
    hitDice: Dice.D8,
    primaryAbility: Abilities.Intelligence,
    savingThrowProficiencies: [Abilities.Constitution, Abilities.Intelligence],
    armorProficiencies: ['light', 'medium'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [
      'tinker’s tools',
      'smith’s tools',
      'alchemist’s supplies',
    ],
    skillProficiencies: [
      'arcana',
      'history',
      'medicine',
      'sleight of hand',
      'technology',
    ],
    startingEquipment: [
      'light crossbow',
      'quiver of 20 bolts',
      'tinker’s tools',
      'explorer’s pack',
    ],
    features: [
      {
        name: 'Spellcasting',
        description:
          'You can cast artificer spells using your Intelligence modifier for spellcasting.',
        level: 1,
      },
      {
        name: 'Infuse Magic',
        description:
          'At 2nd level, you can infuse magical properties into objects, granting them new abilities.',
        level: 2,
      },
      {
        name: 'Artisan’s Tools',
        description:
          'At 3rd level, you can create magical items using tools of your choice, enhancing your crafting abilities.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Alchemist',
        description:
          'An artificer who focuses on creating potions, explosives, and magical mixtures.',
        levelRequirements: 3,
        features: [
          {
            name: 'Alchemical Savant',
            description:
              'At 3rd level, you can use alchemy to create powerful potions that heal, harm, or modify physical traits.',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Illrigger',
    description:
      'A dark and mysterious class that blends martial prowess and infernal power, often serving fiendish patrons and wielding both sword and magic',
    hitDice: Dice.D10,
    primaryAbility: Abilities.Strength,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Charisma],
    armorProficiencies: ['light', 'medium', 'heavy', 'shield'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: ['athletics', 'intimidation', 'persuasion'],
    startingEquipment: ['chain mail', 'longsword', 'shield', 'explorer’s pack'],
    features: [
      {
        name: 'Infernal Magic',
        description:
          'You learn to cast spells from the Warlock spell list, using Charisma as your spellcasting modifier.',
        level: 1,
      },
      {
        name: 'Fell Weapon',
        description:
          'You can imbue weapons with infernal power, dealing extra fire or necrotic damage on a hit.',
        level: 1,
      },
      {
        name: 'Fiendish Presence',
        description:
          'At 2nd level, you can use your action to frighten creatures around you with your fiendish presence.',
        level: 2,
      },
      {
        name: 'Hellish Rebuke',
        description:
          'When you take damage, you can use your reaction to deal fire damage to the attacker.',
        level: 2,
      },
    ],
    subclasses: [
      {
        name: 'Hellbound',
        description:
          'A subclass that grants additional fire magic and powerful infernal abilities, strengthening your bond with fiends.',
        levelRequirements: 3,
        features: [
          {
            name: 'Hellish Strike',
            description:
              'At 3rd level, you can deal fire damage to your enemies with every strike of your weapon.',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Blood Hunter',
    description:
      'A grim warrior who uses their own blood to fuel dark rituals and unlock destructive powers, hunting monsters with fierce tenacity',
    hitDice: Dice.D10,
    primaryAbility: Abilities.Strength,
    savingThrowProficiencies: [Abilities.Strength, Abilities.Dexterity],
    armorProficiencies: ['light', 'medium'],
    weaponProficiencies: ['simple', 'martial'],
    toolProficiencies: [],
    skillProficiencies: ['athletics', 'intimidation', 'perception', 'survival'],
    startingEquipment: ['longsword', 'blood hunter’s kit', 'explorer’s pack'],
    features: [
      {
        name: 'Crimson Rite',
        description:
          'You can use your own blood to imbue weapons with elemental power, dealing extra damage at the cost of your own life force.',
        level: 1,
      },
      {
        name: 'Hemocraft Magic',
        description:
          'At 2nd level, you gain access to hemocraft spells, which manipulate blood to cause harm or healing.',
        level: 2,
      },
      {
        name: 'Blood Curse',
        description:
          'At 3rd level, you can invoke blood curses to hinder your enemies, cursing them with various harmful effects.',
        level: 3,
      },
    ],
    subclasses: [
      {
        name: 'Order of the Ghostslayer',
        description:
          'A blood hunter who specializes in hunting down spirits and the undead, gaining abilities to strike at creatures beyond the physical realm.',
        levelRequirements: 3,
        features: [
          {
            name: 'Spectral Strike',
            description:
              'At 3rd level, you can deal necrotic damage to spirits and other ethereal beings, bypassing resistance to non-magical attacks.',
            level: 3,
          },
        ],
      },
    ],
  },
];
