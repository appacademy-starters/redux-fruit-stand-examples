import connect from '../connect';
import FruitList from './FruitList';

const mapStateToProps = (state) => ({
  fruit: state.fruit,
});

const FruitListContainer = connect(mapStateToProps)(FruitList)

export default FruitListContainer;
