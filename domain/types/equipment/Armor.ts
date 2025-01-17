export interface Armor {
  name: string;
  type: 'light' | 'medium' | 'heavy';
  traits: string[];
  armorClass: number;
  maximumDexterityBonus: number;
  strengthRequirement: number;
  stealthDisadvantage: boolean;
}
