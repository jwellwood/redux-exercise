import { connect } from 'react-redux';
import { State } from '../../reducers';
import { memberRequest } from '../../actions/memberRequest';
import { organizationNameChange } from '../../actions/organizationNameChange';
import { MemberAreaComponent } from './memberArea';

const mapStateToProps = (state: State) => {
  return {
    currentPage: state.pageChangeReducer.currentPage,
    membersPerPage: state.pageChangeReducer.membersPerPage,
    members: state.memberReducer,
    orgName: state.orgNameChangeReducer.orgName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (org) => dispatch(memberRequest(org)),
    onChange: (orgName: string) => dispatch(organizationNameChange(orgName)),
  };
};

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
