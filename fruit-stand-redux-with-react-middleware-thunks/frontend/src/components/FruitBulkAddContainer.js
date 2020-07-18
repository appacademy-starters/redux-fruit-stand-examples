import { connect } from 'react-redux';
import { addFruits } from '../actions/fruitActions';
import FruitBulkAdd from './FruitBulkAdd';

const mapDispatchToProps = (dispatch) => ({
  addBulk: (fruit) => dispatch(addFruits(fruit)),
});

const FruitBulkAddContainer = connect(
  null,
  mapDispatchToProps
)(FruitBulkAdd)

export default FruitBulkAddContainer;
