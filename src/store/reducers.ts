import { BookType } from '../App/Library/BookList/book.types';
import { Action } from './actions';
import { ADD_TO_CART, SET_BOOKS, SET_CART_TOTAL, SET_CART_TOTAL_WITH_PROMO, SET_SEARCH } from './actionTypes';
import { calculateTotal } from '../App/Library/Cart/cart.service';

export interface State {
  search: string;
  books: BookType[];
  cart: CartState;
}

export interface CartState {
  items: BookType[];
  total: number;
  totalWithPromo: number;
}

const initialState: State = {
  search: '',
  books: [],
  cart: {
    items: [],
    total: 0,
    totalWithPromo: 0,
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
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [
            ...state.cart.items,
            action.book,
          ],
        },
      };
    case SET_CART_TOTAL:
      return {
        ...state,
        cart: {
          ...state.cart,
          total: calculateTotal(state.cart.items),
        },
      };
    case SET_CART_TOTAL_WITH_PROMO:
      return {
        ...state,
        cart: {
          ...state.cart,
          totalWithPromo: action.totalWithPromo,
        }
      }
    default:
      return state;
  }
}
