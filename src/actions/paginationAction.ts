import { actionsEnums } from '../common/actionsEnums';

export const changePage = (pageNum: number) => {
  return {
    type: actionsEnums.CHANGE_PAGE,
    payload: pageNum,
  };
};
export const changeMembersPerPage = (membersPerPage: number) => {
  return {
    type: actionsEnums.CHANGE_MEMBERS_PER_PAGE,
    payload: membersPerPage,
  };
};
