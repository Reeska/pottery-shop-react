import { State } from '../reducers'
import { createSelector } from 'reselect'
import {
  calculateTotal,
  calculateTotalWithPromo,
} from '../../domains/cart/cart.service'
import { getBooksFilterByIsbns } from '../../domains/books/book.service'
import { getBooks } from '../books/selectors'

const getOffers = (state: State) => state.cart.offers
const getCartIsbns = (state: State) => state.cart.itemsIsbns
export const getCartLength = (state: State) => state.cart.itemsIsbns.length

export const getCartItems = createSelector(
  [getBooks, getCartIsbns],
  getBooksFilterByIsbns,
)

export const getTotal = createSelector(
  [getCartItems],
  calculateTotal,
)

export const getTotalWithPromo = createSelector(
  [getOffers, getTotal],
  calculateTotalWithPromo,
)
