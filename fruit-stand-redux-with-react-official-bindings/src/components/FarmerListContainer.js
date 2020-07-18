import { connect } from 'react-redux';
import { payFarmer } from '../actions/farmersActions';
import { getAllFarmers } from '../reducers/farmersSelectors';
import FarmerList from './FarmerList';

const mapStateToProps = (state) => ({
  farmers: getAllFarmers(state),
});

const mapDispatchToProps = (dispatch) => ({
  pay: (id) => dispatch(payFarmer(id)),
});

const FarmerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmerList)

export default FarmerListContainer;
