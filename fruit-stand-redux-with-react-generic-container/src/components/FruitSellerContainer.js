import connect from '../connect';
import { sellFruit, sellOut } from '../actions/fruitActions';
import FruitSeller from './FruitSeller';

const mapStateToProps = (state) => ({
  distinctFruit: Array.from(new Set(state.fruit)).sort(),
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
