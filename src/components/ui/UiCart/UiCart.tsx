import React from 'react';
import './UiCart.scss';
import { CartState } from '../../../store/reducers';

interface CartProps {
  cart: CartState;
}

function UiCart (props: CartProps) {
  const {items, total} = props.cart;
  return (
      <div className="cart">
        <h1>Cart</h1>
        {!items.length
            ? <p>No items in your cart.</p>
            :
            <table className="items">
              <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {items.map(book =>
                  <tr key={book.isbn}>
                    <td>{book.title}</td>
                    <td className="price">{book.price} $</td>
                  </tr>
              )}
              </tbody>
              <tfoot>
              <tr>
                <td>Total</td>
                <td className="price total">{total} $</td>
              </tr>
              </tfoot>
            </table>
        }
      </div>
  );
}

export default UiCart;
