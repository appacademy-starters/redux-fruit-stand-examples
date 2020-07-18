import React from 'react';
import store from '../store';
import { addFruits } from '../actions/fruitActions';
import FruitBulkAdd from './FruitBulkAdd';

class FruitBulkAddContainer extends React.Component {
  addBulk = (fruit) => {
    store.dispatch(addFruits(fruit));
  }

  render() {
    return (
      <FruitBulkAdd addBulk={this.addBulk} />
    );
  }
}

export default FruitBulkAddContainer;
