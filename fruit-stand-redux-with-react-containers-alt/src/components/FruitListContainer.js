import React from 'react';
import store from '../store';
import FruitList from './FruitList';

class FruitListContainer extends React.Component {
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
    const { fruit } = store.getState();

    return (
      <FruitList fruit={fruit} />
    );
  }
}

export default FruitListContainer;
