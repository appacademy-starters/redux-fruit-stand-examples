import connect from '../connect';
import { hireFarmer, payFarmer } from '../actions/farmersActions';
import FarmerManager from './FarmerManager';

const mapStateToProps = (state) => ({
  farmers: Object.keys(state.farmers)
    .map(id => state.farmers[id]),
});

const mapDispatchToProps = (dispatch) => ({
  pay: (id) => dispatch(payFarmer(id)),
  hire: (name) => dispatch(hireFarmer(name)),
});

const FarmerManagerContainer = connect(
  FarmerManager,
  mapStateToProps,
  mapDispatchToProps
);

export default FarmerManagerContainer;
