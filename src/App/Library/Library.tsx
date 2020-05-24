import React from 'react';
import { connect } from 'react-redux';

import './Library.scss';
import BookList from './BookList/BookList';
import { BookType } from './book.types';
import { bookFilter } from './book.service';
import { State } from '../../store/reducers';

interface LibraryProps {
  search: string;
  books: BookType[];
}

function Library ({search, books}: LibraryProps) {
  return (
      <div className="library">
        <h1>Library</h1>
        {search && (
            <p>{books.length > 0
                ? <>List filtered with</>
                : <>No results for</>
            } &laquo; {search} &raquo;</p>
        )}
        <BookList books={books}/>
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
)(Library);
