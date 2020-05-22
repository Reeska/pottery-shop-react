import React from "react";

import './CartButton.scss';
import UiCartButton from "../../../../components/ui/Navbar/UiCartButton/UiCartButton";

function CartButton() {
  return (
    <UiCartButton count={2} />
  )
}

export default CartButton;
