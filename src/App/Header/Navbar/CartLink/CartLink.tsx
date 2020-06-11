import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import UiCartLink from '../../../../components/ui/Navbar/UiCartLink/UiCartLink'
import { getCartLength } from '../../../../store/cart/selectors'

function CartLink() {
  const count = useSelector(getCartLength)

  return (
    <Link to="/cart">
      <UiCartLink count={count}/>
    </Link>
  )
}

export default CartLink
