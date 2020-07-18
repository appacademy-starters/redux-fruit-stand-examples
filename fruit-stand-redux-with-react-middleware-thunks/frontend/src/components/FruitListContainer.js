import { connect } from 'react-redux';
import { getFruitNames } from '../reducers/fruitSelectors';
import FruitList from './FruitList';

const mapStateToProps = (state) => ({
  fruit: getFruitNames(state),
});

const FruitListContainer = connect(mapStateToProps)(FruitList)

export default FruitListContainer;
