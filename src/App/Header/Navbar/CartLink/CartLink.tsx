import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCartLength } from '../../../../store/cart/selectors'
import { UiCartLink } from '@pottery-ui/react'

function CartLink() {
  const count = useSelector(getCartLength)

  return (
    <Link to="/cart">
      <UiCartLink count={count}/>
    </Link>
  )
}

export default CartLink
