import { Weapon, Armor, Shield, Item, CoinGroup } from '.';

export interface InventorySpace {
  weapons: Weapon[];
  armor: Armor[];
  shield: Shield[];
  items: Item[];
}

export interface Inventory {
  equipped: InventorySpace;
  backpack: InventorySpace;
  otherPossessions: InventorySpace;
  currency: CoinGroup;
}
