import { connect } from 'react-redux';
import { State } from '../../reducers';
import { individualUserRequest } from '../../actions/individualUsernameRequest';
import { IndividualUserAreaComponent } from './IndividualUserArea';

const mapStateToProps = (state: State) => {
  return {
    user: state.individualUserReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (id) => dispatch(individualUserRequest(id)),
  };
};

export const IndividualUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualUserAreaComponent);
