import React from "react";
import './UiCartButton.scss';

export interface CartButtonProps {
  count: number;
}

function UiCartButton(props: CartButtonProps) {
  return (
      <button className="cart-button">
        <span role="img" aria-label="">🛒</span> Cart <span className="badge">{props.count}</span>
      </button>
  )
}

export default UiCartButton;
