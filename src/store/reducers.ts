import { BookType } from '../App/Library/book.types';
import { Action } from './actions';
import { ADD_TO_CART, SET_BOOKS, SET_SEARCH } from './actionTypes';

export interface State {
  search: string;
  books: BookType[];
  cart: BookType[];
}

const initialState: State = {
  search: '',
  books: [],
  cart: [],
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
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
            ...state.cart,
            action.book,
        ],
      };
    default:
      return state;
  }
}
