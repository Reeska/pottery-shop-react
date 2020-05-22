import { createStore } from 'redux';

import { BookType } from '../App/Library/book.types';
import { books } from '../App/Library/book.service';

export interface State {
  search: string;
  books: BookType[];
}

interface SetSearchAction {
  type: typeof SET_SEARCH;
  value: string;
}

export type Action = SetSearchAction;

const initialState: State = {
  search: '',
  books,
};

export const SET_SEARCH = 'SET_SEARCH';

export function setSearchAction (search: string): SetSearchAction {
  return {
    type: SET_SEARCH,
    value: search,
  };
}

function reducer (state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.value
      };
    default:
      return state;
  }
}

export default createStore(reducer);
