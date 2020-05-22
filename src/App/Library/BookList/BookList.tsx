import React from 'react';

import './BookList.scss';
import { BookType } from '../book.types';
import Book from './Book/Book';

interface BookListProps {
  books: BookType[];
}

function BookList (props: BookListProps) {
  return (
      <div className="book-list">
        {props.books.map(book => <Book key={book.isbn} book={book}/>)}
      </div>
  );
}

export default BookList;
