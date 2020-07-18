import React from 'react';
import store from '../store';
import { sellFruit, sellOut } from '../actions/fruitActions';

class FruitSeller extends React.Component {
  sellFruitClick = (event) => {
    const fruit = event.target.innerText;
    store.dispatch(sellFruit(fruit));
  }

  sellOutClick = () => {
    store.dispatch(sellOut());
  }

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

  render() {
    const fruit = store.getState();
    const distinctFruit = Array.from(new Set(fruit)).sort();

    if (distinctFruit.length === 0) {
      return null;
    }

    return (
      <div>
        <h3>Sell</h3>
        {distinctFruit.map((f) => (
          <button onClick={this.sellFruitClick}>{f}</button>
        ))}
        <button onClick={this.sellOutClick}>SELL OUT</button>
      </div>
    );
  }
}

export default FruitSeller;
