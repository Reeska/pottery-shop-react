import React from "react";
import './UiCartLink.scss';

export interface CartLinkProps {
  count: number;
}

function UiCartLink(props: CartLinkProps) {
  return (
      <button className="cart-link">
        <span role="img" aria-label="">🛒</span>
        <span className="label">Cart</span>
        <span className="badge">{props.count}</span>
      </button>
  )
}

export default UiCartLink;
