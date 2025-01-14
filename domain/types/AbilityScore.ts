export interface DndAbilityScore {
  base: number;
  speciesAdjustment: number;
  situationalAdjustment: number;
  override?: number;
}

export interface CalculatedAbilityScore extends DndAbilityScore {
  total: number; // Total score after applying modifiers
  modifier: number; // Modifier calculated from total score
}

export interface DndAbilityScores {
  strength: DndAbilityScore;
  strengthProficiency?: boolean;
  dexterity: DndAbilityScore;
  dexterityProficiency?: boolean;
  constitution: DndAbilityScore;
  constitutionProficiency?: boolean;
  intelligence: DndAbilityScore;
  intelligenceProficiency?: boolean;
  wisdom: DndAbilityScore;
  wisdomProficiency?: boolean;
  charisma: DndAbilityScore;
  charismaProficiency?: boolean;
  editable: boolean;
}

export const EmptyAbilityScores = {
  strength: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  dexterity: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  constitution: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  intelligence: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  wisdom: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  charisma: {
    base: 10,
    speciesAdjustment: 0,
    situationalAdjustment: 0,
  },
  editable: false,
};
