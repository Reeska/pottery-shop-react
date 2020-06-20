import React from 'react'
import { useSelector } from 'react-redux'

import {
  getCartItems,
  getTotal,
  getTotalWithPromo,
} from '../../../store/cart/selectors'
import { UiCart } from '@pottery-ui/react'

function Cart() {
  const items = useSelector(getCartItems)
  const total = useSelector(getTotal)
  const totalWithPromo = useSelector(getTotalWithPromo)

  return (
    <UiCart items={items} total={total} totalWithPromo={totalWithPromo} />
  )
}

export default Cart
