import React from 'react';

export const Inventory: React.FC<{
  inventory: any;
}> = () => {
  return (
    <div className="box-outline-spacing">
      <h2 className="text-xl">Inventory</h2>
      <div>
        <h3 className="text-lg">Weapons</h3>
        <div>
          <label>
            Name:
            <input />
          </label>
          <label>
            Damage:
            <input />
          </label>
          <label>
            Range:
            <input />
          </label>
          <label>
            Weight:
            <input />
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-lg">Armor</h3>
        <div>
          <label>
            Name:
            <input />
          </label>
          <label>
            AC:
            <input />
          </label>
          <label>
            Weight:
            <input />
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-lg">Items</h3>
        <div>
          <label>
            Name:
            <input />
          </label>
          <label>
            Quantity:
            <input />
          </label>
          <label>
            Weight:
            <input />
          </label>
        </div>
      </div>
    </div>
  );
};
