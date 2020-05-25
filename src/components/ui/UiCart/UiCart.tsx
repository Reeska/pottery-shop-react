import React from 'react';

import { BookType } from '../../../App/Library/book.types';
import './UiCart.scss';

interface CartProps {
  cart: BookType[];
}

function UiCart (props: CartProps) {
  const {cart} = props;
  return (
      <div>
        <h2>Cart</h2>
        {!cart.length
            ? <p>No items in your cart.</p>
            : <ul>
              {cart.map(book =>
                  <li key={book.isbn}>{book.title} - {book.price}</li>
              )}
            </ul>
        }
      </div>
  );
}

export default UiCart;
