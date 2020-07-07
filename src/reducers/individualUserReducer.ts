import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity, createDefaultMemberEntity } from '../model/member';

export type userState = MemberEntity;

export const individualUserReducer = (
  state: userState = createDefaultMemberEntity(),
  action
) => {
  switch (action.type) {
    case actionsEnums.INDIVIDUAL_USER_REQUEST:
      return handleUserRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleUserRequestCompletedAction = (
  state: userState = createDefaultMemberEntity(),
  user
) => {
  return user;
};
