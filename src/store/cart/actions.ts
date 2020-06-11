import { Action as ReduxAction } from 'redux'
import {
  ThunkAction,
  ThunkDispatch,
} from 'redux-thunk'

import { State } from '../reducers'
import { BookType } from '../../domains/books/book.types'
import {
  calculateTotal,
  getOffers,
} from '../../domains/cart/cart.service'
import { Offer } from '../../domains/cart/cart.types'

export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_CART_TOTAL = 'SET_CART_TOTAL';
export const SET_OFFERS = 'SET_OFFERS';

interface AddToCartAction extends ReduxAction {
  type: typeof ADD_TO_CART;
  book: BookType;
}

interface SetCartTotalAction extends ReduxAction {
  type: typeof SET_CART_TOTAL;
  total: number;
}

interface SetOffersAction extends ReduxAction {
  type: typeof SET_OFFERS;
  offers: Offer[]
}

export type CartAction =
  | AddToCartAction
  | SetCartTotalAction
  | SetOffersAction
  ;

export function setCartTotal(total: number): SetCartTotalAction {
  return {
    type: SET_CART_TOTAL,
    total,
  }
}

export function addToCartAction(book: BookType): AddToCartAction {
  return {
    type: ADD_TO_CART,
    book,
  }
}

export function setOffersAction(offers: Offer[]): SetOffersAction {
  return {
    type: SET_OFFERS,
    offers,
  }
}

export function addToCart(book: BookType): ThunkAction<void, State, any, CartAction> {
  return async (dispatch: ThunkDispatch<State, any, CartAction>, getState: () => State) => {
    dispatch(addToCartAction(book))

    const {cart: {items}} = getState()
    const total = calculateTotal(items)

    dispatch(setCartTotal(total))

    const {offers} = await getOffers(items)

    dispatch(setOffersAction(offers))
  }
}
