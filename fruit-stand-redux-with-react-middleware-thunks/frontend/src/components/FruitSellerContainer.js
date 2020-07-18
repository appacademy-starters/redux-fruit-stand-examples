import { connect } from 'react-redux';
import { sellFruit, sellOut } from '../actions/fruitActions';
import { getDistinctFruitNames } from '../reducers/fruitSelectors';
import FruitSeller from './FruitSeller';

const mapStateToProps = (state) => ({
  distinctFruit: getDistinctFruitNames(state),
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
