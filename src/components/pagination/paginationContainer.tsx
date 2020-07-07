import { connect } from 'react-redux';
import { State } from '../../reducers';
import {
  changePage,
  changeMembersPerPage,
} from '../../actions/paginationAction';
import { PaginationComponent } from './pagination';

const mapStateToProps = (state: State) => {
  return {
    totalMembers: state.memberReducer.length,
    membersPerPage: state.pageChangeReducer.membersPerPage,
    currentPage: state.pageChangeReducer.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (p) => dispatch(changePage(p)),
    changeMembersPerPage: (p) => dispatch(changeMembersPerPage(p)),
  };
};

export const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);
