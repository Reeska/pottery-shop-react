import React from 'react';
import { connect } from 'react-redux';

import './Library.scss';
import BookList from './BookList/BookList';
import { State } from '../../store';
import { BookType } from './book.types';
import { bookFilter } from './book.service';

interface LibraryProps {
  search: string;
  books: BookType[];
}

function Library (props: LibraryProps) {
  const {search, books} = props;
  const filteredBooks = books.filter(bookFilter(search));

  return (
      <div className="library">
        <h1>Library</h1>
        {search && (
            <p>{filteredBooks.length > 0
                ? <>List filtered with</>
                : <>No results for</>
            } &laquo; {search} &raquo;</p>
        )}
        <BookList books={filteredBooks}/>
      </div>
  );
}

const mapStateToProps = (state: State) => ({
  search: state.search,
  books: state.books,
});

export default connect(
    mapStateToProps
)(Library);
