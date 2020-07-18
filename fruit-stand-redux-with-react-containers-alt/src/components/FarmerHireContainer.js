import React from 'react';
import store from '../store';
import { hireFarmer } from '../actions/farmersActions';
import FarmerHire from './FarmerHire';

class FarmerHireContainer extends React.Component {
  hire = (name) => {
    store.dispatch(hireFarmer(name));
  }

  render() {
    return (
      <FarmerHire hire={this.hire} />
    );
  }
}

export default FarmerHireContainer;
