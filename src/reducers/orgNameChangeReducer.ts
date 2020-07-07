import { actionsEnums } from '../common/actionsEnums';

export interface OrgNameState {
  orgName: string;
}

const defaultOrgNameState = (): OrgNameState => ({
  orgName: '',
});

export const orgNameChangeReducer = (state = defaultOrgNameState(), action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORG_NAME_INPUT:
      return handleOrgNameChangeAction(state, action.payload);
  }

  return state;
};

const handleOrgNameChangeAction = (state: OrgNameState, orgName) => {
  return {
    ...state,
    orgName,
  };
};
