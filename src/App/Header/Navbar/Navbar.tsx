import React from 'react'

import Search from './Search/Search'
import CartButton from './CartLink/CartLink'
import { UiNavbar } from '@pottery-ui/react'

function Navbar() {
  return (
    <UiNavbar>
      <Search/>
      <CartButton/>
    </UiNavbar>
  )
}

export default Navbar
