import React from 'react'

import { BookType } from '../../../domains/books/book.types'
import UiBook from '../UiBook/UiBook'

interface BookListProps {
  search: string;
  books: BookType[];
  addToCart: (book: BookType) => void;
}

function UiBookList({search, books, addToCart}: BookListProps) {
  return (
    <div className="book-list">
      <h1>Library</h1>
      {search && (
        <p>{books.length > 0
          ? 'List filtered with'
          : 'No results for'
        } &laquo; {search} &raquo;</p>
      )}
      {books.map(book => <UiBook key={book.isbn} book={book} addToCart={addToCart}/>)}
    </div>
  )
}

export default UiBookList
