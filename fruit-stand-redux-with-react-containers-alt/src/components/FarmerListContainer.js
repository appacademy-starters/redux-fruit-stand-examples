import React from 'react';
import store from '../store';
import { payFarmer } from '../actions/farmersActions';
import FarmerList from './FarmerList';

class FarmerListContainer extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  pay = (id) => {
    store.dispatch(payFarmer(id));
  }

  render() {
    const { farmers: farmersState } = store.getState();
    const farmers = Object.keys(farmersState)
      .map(key => farmersState[key]);

    return (
      <FarmerList farmers={farmers} pay={this.pay} />
    );
  }
}

export default FarmerListContainer;
