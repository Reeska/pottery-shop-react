import { BookType } from '../App/Library/BookList/book.types';
import { Action } from './actions';
import { ADD_TO_CART, SET_BOOKS, SET_SEARCH } from './actionTypes';
import { calculateTotal } from '../App/Library/Cart/cart.service';

export interface State {
  search: string;
  books: BookType[];
  cart: CartState;
}

export interface CartState {
  items: BookType[];
  total: number;
}

const initialState: State = {
  search: '',
  books: [],
  cart: {
    items: [],
    total: 0,
  },
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
      const items = [
        ...state.cart.items,
        action.book,
      ];

      return {
        ...state,
        cart: {
          ...state.cart,
          items,
          total: calculateTotal(items),
        },
      };
    default:
      return state;
  }
}
