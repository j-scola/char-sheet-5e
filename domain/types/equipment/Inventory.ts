import { Weapon, Armor, Shield, Item, CoinGroup } from '.';

export interface InventorySpace {
  weapons: Weapon[];
  armor: Armor[];
  shield: Shield[];
  items: Item[];
}

export interface ItemInventory {
  equipped: InventorySpace;
  backpack: InventorySpace;
  otherPossessions: InventorySpace;
  currency: CoinGroup;
}

export const EmptyInventorySpace: InventorySpace = {
  weapons: [],
  armor: [],
  shield: [],
  items: [],
};

export const EmptyInventory: ItemInventory = {
  equipped: EmptyInventorySpace,
  backpack: EmptyInventorySpace,
  otherPossessions: EmptyInventorySpace,
  currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
};
