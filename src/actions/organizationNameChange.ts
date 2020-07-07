import { actionsEnums } from '../common/actionsEnums';

export const organizationNameChange = (organizationName: string) => {
  return {
    type: actionsEnums.UPDATE_ORG_NAME_INPUT,
    payload: organizationName,
  };
};
