import { connect } from 'react-redux';
import {
  addFruit,
  addFruits,
  sellFruit,
  sellOut,
} from '../actions/fruitActions';
import { getDistinctFruit } from '../reducers/fruitSelectors';
import FruitManager from './FruitManager';

const mapStateToProps = (state) => ({
  fruit: state.fruit,
  distinctFruit: getDistinctFruit(state),
});

const mapDispatchToProps = (dispatch) => ({
  add: (fruit) => dispatch(addFruit(fruit)),
  addBulk: (fruit) => dispatch(addFruits(fruit)),
  sell: (fruit) => dispatch(sellFruit(fruit)),
  sellAll: () => dispatch(sellOut()),
});

const FruitManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitManager);

export default FruitManagerContainer;
