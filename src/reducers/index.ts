import { combineReducers } from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { orgNameChangeReducer, OrgNameState } from './orgNameChangeReducer';
import { individualUserReducer, userState } from './individualUserReducer';
import { pageChangeReducer, PaginationState } from './paginationReducer';

export interface State {
  memberReducer: memberState;
  orgNameChangeReducer: OrgNameState;
  individualUserReducer: userState;
  pageChangeReducer: PaginationState;
}

export const reducers = combineReducers<State>({
  memberReducer,
  orgNameChangeReducer,
  individualUserReducer,
  pageChangeReducer,
});
