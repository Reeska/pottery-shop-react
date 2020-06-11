import { getBooksFilterBySearch } from '../../domains/books/book.service'
import { State } from '../reducers'
import { createSelector } from 'reselect'

const getBooks = (state: State) => state.books
const getSearchFilter = (state: State) => state.search

export const selectFilteredBooks = createSelector(
  [getBooks, getSearchFilter],
  getBooksFilterBySearch,
)
