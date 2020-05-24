import { BookType } from '../App/Library/book.types';
import { Action } from './actions';
import { SET_BOOKS, SET_SEARCH } from './actionTypes';

export interface State {
  search: string;
  books: BookType[];
}

const initialState: State = {
  search: '',
  books: [],
};

export function reducer (state: State = initialState, action: Action): State {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.value,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: action.books,
      }
    default:
      return state;
  }
}
