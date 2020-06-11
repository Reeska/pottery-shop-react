import { Action as ReduxAction } from 'redux'

export const SET_SEARCH = 'SET_SEARCH';

interface SetSearchAction extends ReduxAction {
  type: typeof SET_SEARCH;
  value: string;
}

export function setSearchAction (search: string): SetSearchAction {
  return {
    type: SET_SEARCH,
    value: search,
  };
}

export type SearchAction = SetSearchAction
