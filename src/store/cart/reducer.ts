import { BookType } from '../../domains/books/book.types'
import { Offer } from '../../domains/cart/cart.types'
import {
  ADD_TO_CART,
  CartAction,
  SET_CART_TOTAL,
  SET_OFFERS,
} from './actions'

export interface CartState {
  items: BookType[];
  total: number;
  offers: Offer[]
}

export const initialCartState = {
  items: [],
  total: 0,
  offers: [],
}

export function cartReducer(state: CartState = initialCartState, action: CartAction): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.book,
        ],
      }
    case SET_CART_TOTAL:
      return {
        ...state,
        total: action.total,
      }
    case SET_OFFERS:
      return {
        ...state,
        offers: action.offers,
      }
    default:
      return state
  }
}
