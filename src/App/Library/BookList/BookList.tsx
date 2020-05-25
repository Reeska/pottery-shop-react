import React from 'react';

import './BookList.scss';
import { BookType } from '../book.types';
import Book from './Book/Book';
import { bookFilter } from '../book.service';
import { State } from '../../../store/reducers';
import { connect } from 'react-redux';

interface BookListProps {
  search: string;
  books: BookType[];
}

function BookList ({books, search}: BookListProps) {
  return (
      <div className="book-list">
        <h1>Library</h1>
        {search && (
            <p>{books.length > 0
                ? <>List filtered with</>
                : <>No results for</>
            } &laquo; {search} &raquo;</p>
        )}
        {books.map(book => <Book key={book.isbn} book={book}/>)}
      </div>
  );
}

function getBooksFilterBySearch (books: BookType[], search: string): BookType[] {
  return books.filter(bookFilter(search));
}

const mapStateToProps = (state: State) => ({
  search: state.search,
  books: getBooksFilterBySearch(state.books, state.search),
});

export default connect(
    mapStateToProps,
)(BookList);
