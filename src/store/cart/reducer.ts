import { Offer } from '../../domains/cart/cart.types'
import {
  ADD_TO_CART,
  CartAction,
  SET_OFFERS,
} from './actions'

export interface CartState {
  itemsIsbns: string[];
  offers: Offer[]
}

export const initialCartState: CartState = {
  itemsIsbns: [],
  offers: [],
}

export function cartReducer(state: CartState = initialCartState, action: CartAction): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsIsbns: [
          ...state.itemsIsbns,
          action.bookIsbn,
        ],
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
