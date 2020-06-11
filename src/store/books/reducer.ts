import { BookType } from '../../domains/books/book.types'
import {
  BooksAction,
  SET_BOOKS,
} from './actions'

export type BooksState = BookType[]
export const initialBooksState = []

export function booksReducer(state: BooksState = initialBooksState, action: BooksAction): BooksState {
  switch (action.type) {
    case SET_BOOKS:
      return action.books
    default:
      return state
  }
}
