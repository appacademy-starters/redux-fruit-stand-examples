import { connect } from 'react-redux';
import { sellFruit, sellOut } from '../actions/fruitActions';
import { getDistinctFruit } from '../reducers/fruitSelectors';
import FruitSeller from './FruitSeller';

const mapStateToProps = (state) => ({
  distinctFruit: getDistinctFruit(state),
});

const mapDispatchToProps = (dispatch) => ({
  sell: (fruit) => dispatch(sellFruit(fruit)),
  sellAll: () => dispatch(sellOut()),
});

const FruitSellerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitSeller)

export default FruitSellerContainer;
