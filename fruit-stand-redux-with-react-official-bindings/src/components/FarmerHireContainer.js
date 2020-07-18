import { connect } from 'react-redux';
import { hireFarmer } from '../actions/farmersActions';
import FarmerHire from './FarmerHire';

const mapDispatchToProps = (dispatch) => ({
  hire: (name) => dispatch(hireFarmer(name)),
});

const FarmerHireContainer = connect(
  null,
  mapDispatchToProps
)(FarmerHire)

export default FarmerHireContainer;
