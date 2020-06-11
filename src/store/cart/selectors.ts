import { State } from '../reducers'
import { createSelector } from 'reselect'
import { calculateTotalWithPromo } from '../../domains/cart/cart.service'

const getTotal = (state: State) => state.cart.total
const getOffers = (state: State) => state.cart.offers

export const getTotalWithPromo = createSelector(
  [getOffers, getTotal],
  calculateTotalWithPromo,
)
