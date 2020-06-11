import React, { useCallback } from 'react'

import './UiBook.scss'
import { BookType } from '../../../domains/books/book.types'

interface BookProps {
  book: BookType;
  addToCart: (book: BookType) => void;
}

function UiBook({book, addToCart}: BookProps) {
  const {title, price, cover} = book

  const handleAddToCart = useCallback(
    () => addToCart(book),
    [addToCart, book]
  )

  return (
    <article className="book">
      <img className="book__cover" src={cover} alt="book cover"/>
      <div className="book__panel">
        <h3 className="book__title">{title}</h3>
        <div className="book__price">{price} $</div>
        <div className="book__cart">
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </article>
  )
}

export default UiBook
