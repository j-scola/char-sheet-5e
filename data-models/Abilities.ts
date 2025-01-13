type Ability = {
  base: number;
  modifiers: number;
};

export interface Abilities {
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
  editable: boolean;
}

const EmptyAbility: Ability = {
  base: 10,
  modifiers: 0,
};

export const EmptyAbilities = {
  strength: EmptyAbility,
  dexterity: EmptyAbility,
  constitution: EmptyAbility,
  intelligence: EmptyAbility,
  wisdom: EmptyAbility,
  charisma: EmptyAbility,
  editable: true,
};
