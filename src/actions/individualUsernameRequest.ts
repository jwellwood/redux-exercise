import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member';

export const individualUserRequestCompleted = (user: MemberEntity) => {
  return {
    type: actionsEnums.INDIVIDUAL_USER_REQUEST,
    payload: user,
  };
};

export const individualUserRequest = (id: string) => (dispatcher) => {
  const promise = memberAPI.getMemberDetails(id);

  promise.then((data) => dispatcher(individualUserRequestCompleted(data)));

  return promise;
};
