import React from 'react';
import store from '../store';
import { sellFruit, sellOut } from '../actions/fruitActions';
import FruitSeller from './FruitSeller';

class FruitSellerContainer extends React.Component {
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

  sell = (fruit) => {
    store.dispatch(sellFruit(fruit));
  }

  sellAll = () => {
    store.dispatch(sellOut());
  }

  render() {
    const { fruit } = store.getState();
    const distinctFruit = Array.from(new Set(fruit)).sort();

    return (
      <FruitSeller
        distinctFruit={distinctFruit}
        sell={this.sell}
        sellAll={this.sellAll} />
    );
  }
}

export default FruitSellerContainer;
