import React from 'react';
import store from '../store';
import { addFruit } from '../actions/fruitActions';
import FruitQuickAdd from './FruitQuickAdd';

class FruitQuickAddContainer extends React.Component {
  add = (fruit) => {
    store.dispatch(addFruit(fruit));
  }

  render() {
    return (
      <FruitQuickAdd add={this.add} />
    );
  }
}

export default FruitQuickAddContainer;
