import { Action as ReduxAction } from 'redux'
import {
  ThunkAction,
  ThunkDispatch,
} from 'redux-thunk'

import { State } from '../reducers'
import { getOffers } from '../../domains/cart/cart.service'
import { Offer } from '../../domains/cart/cart.types'

export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_CART_TOTAL = 'SET_CART_TOTAL';
export const SET_OFFERS = 'SET_OFFERS';

interface AddToCartAction extends ReduxAction {
  type: typeof ADD_TO_CART;
  bookIsbn: string;
}

interface SetOffersAction extends ReduxAction {
  type: typeof SET_OFFERS;
  offers: Offer[]
}

export type CartAction =
  | AddToCartAction
  | SetOffersAction
  ;

export function addToCartAction(bookIsbn: string): AddToCartAction {
  return {
    type: ADD_TO_CART,
    bookIsbn,
  }
}

export function setOffersAction(offers: Offer[]): SetOffersAction {
  return {
    type: SET_OFFERS,
    offers,
  }
}

export function addToCart(bookIsbn: string): ThunkAction<void, State, any, CartAction> {
  return async (dispatch: ThunkDispatch<State, any, CartAction>, getState: () => State) => {
    dispatch(addToCartAction(bookIsbn))

    const {cart: {itemsIsbns}} = getState()

    const {offers} = await getOffers(itemsIsbns)

    dispatch(setOffersAction(offers))
  }
}
