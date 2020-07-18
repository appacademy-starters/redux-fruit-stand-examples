import connect from '../connect';
import { payFarmer } from '../actions/farmersActions';
import FarmerList from './FarmerList';

const mapStateToProps = (state) => ({
  farmers: Object.keys(state.farmers)
    .map(id => state.farmers[id]),
});

const mapDispatchToProps = (dispatch) => ({
  pay: (id) => dispatch(payFarmer(id)),
});

const FarmerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmerList)

export default FarmerListContainer;
