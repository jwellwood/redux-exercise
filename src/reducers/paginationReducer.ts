import { actionsEnums } from '../common/actionsEnums';

export interface PaginationState {
  currentPage: number;
  membersPerPage: number;
  totalMembers: number;
}

const defaultPaginationState = (): PaginationState => ({
  currentPage: 1,
  membersPerPage: 3,
  totalMembers: null,
});

export const pageChangeReducer = (state = defaultPaginationState(), action) => {
  switch (action.type) {
    case actionsEnums.CHANGE_PAGE:
      return handlePageChange(state, action.payload);
    case actionsEnums.CHANGE_MEMBERS_PER_PAGE:
      return handleMembersPerPageChange(state, action.payload);
  }

  return state;
};

const handlePageChange = (state: PaginationState, currentPage) => {
  return {
    ...state,
    currentPage,
  };
};
const handleMembersPerPageChange = (state: PaginationState, membersPerPage) => {
  return {
    ...state,
    membersPerPage,
  };
};
