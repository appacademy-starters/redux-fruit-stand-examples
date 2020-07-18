import { connect } from 'react-redux';
import { addFruit } from '../actions/fruitActions';
import FruitQuickAdd from './FruitQuickAdd';

const mapDispatchToProps = (dispatch) => ({
  add: (fruit) => dispatch(addFruit(fruit)),
});

const FruitQuickAddContainer = connect(
  null,
  mapDispatchToProps
)(FruitQuickAdd)

export default FruitQuickAddContainer;
