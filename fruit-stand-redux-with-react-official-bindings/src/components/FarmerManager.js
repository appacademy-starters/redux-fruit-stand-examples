import React from 'react';
import FarmerListContainer from './FarmerListContainer';
import FarmerHireContainer from './FarmerHireContainer';

const FarmerManager = () => {
  return (
    <div>
      <h2>Farmer Manager</h2>
      <FarmerListContainer />
      <FarmerHireContainer />
    </div>
  );
};

export default FarmerManager;
