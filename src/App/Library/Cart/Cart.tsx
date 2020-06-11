import React from 'react'
import { useSelector } from 'react-redux'

import UiCart from '../../../components/ui/UiCart/UiCart'
import { State } from '../../../store/reducers'
import { getTotalWithPromo } from '../../../store/cart/selectors'

function Cart() {
  const cart = useSelector((state: State) => state.cart)
  const totalWithPromo = useSelector(getTotalWithPromo)

  return (
    <UiCart items={cart.items} total={cart.total} totalWithPromo={totalWithPromo}/>
  )
}

export default Cart
