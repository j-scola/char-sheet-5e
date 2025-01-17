export interface DndAbilityScore {
  base: number;
  situationalAdjustment: number;
  override?: number;
}

export interface CalculatedAbilityScore extends DndAbilityScore {
  total: number; // Total score after applying modifiers
  modifier: number; // Modifier calculated from total score
}

export interface DndAbilityModifiers {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface DndAbilityScores {
  strength: DndAbilityScore;
  dexterity: DndAbilityScore;
  constitution: DndAbilityScore;
  intelligence: DndAbilityScore;
  wisdom: DndAbilityScore;
  charisma: DndAbilityScore;
}

export const EmptyAbilityScores = {
  strength: {
    base: 10,
    situationalAdjustment: 0,
  },
  dexterity: {
    base: 10,
    situationalAdjustment: 0,
  },
  constitution: {
    base: 10,
    situationalAdjustment: 0,
  },
  intelligence: {
    base: 10,
    situationalAdjustment: 0,
  },
  wisdom: {
    base: 10,
    situationalAdjustment: 0,
  },
  charisma: {
    base: 10,
    situationalAdjustment: 0,
  },
};
