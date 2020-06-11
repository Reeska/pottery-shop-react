import React from 'react'
import './UiCart.scss'
import { BookType } from '../../../domains/books/book.types'

interface CartProps {
  items: BookType[];
  total: number;
  totalWithPromo: number;
}

function UiCart({items, total, totalWithPromo}: CartProps) {
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
            </tr>,
          )}
          </tbody>
          <tfoot>
          <tr>
            <td>Total</td>
            <td className="price total">{total} $</td>
          </tr>
          <tr>
            <td>Total with promo</td>
            <td className="price total">{totalWithPromo} $</td>
          </tr>
          </tfoot>
        </table>
      }
    </div>
  )
}

export default UiCart
