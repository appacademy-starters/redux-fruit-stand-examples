import React from 'react';
import FruitListContainer from './FruitListContainer';
import FruitSellerContainer from './FruitSellerContainer';
import FruitQuickAddContainer from './FruitQuickAddContainer';
import FruitBulkAddContainer from './FruitBulkAddContainer';

const FruitManager = () => {
  return (
    <div>
      <h2>Available Fruit</h2>
      <FruitListContainer />
      <h2>Fruit Inventory Manager</h2>
      <FruitSellerContainer />
      <FruitQuickAddContainer />
      <FruitBulkAddContainer />
    </div>
  );
};

export default FruitManager;
