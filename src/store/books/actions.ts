import {
  Action as ReduxAction,
  Dispatch,
} from 'redux'
import { BookType } from '../../domains/books/book.types'
import { getBooks } from '../../domains/books/book.service'

export const SET_BOOKS = 'SET_BOOKS'

interface SetBooksAction extends ReduxAction {
  type: typeof SET_BOOKS;
  books: BookType[];
}

export function setBooksAction(books: BookType[]): SetBooksAction {
  return {
    type: SET_BOOKS,
    books,
  }
}

export type BooksAction = SetBooksAction;

export function loadBooks(): (dispatch: Dispatch<BooksAction>) => Promise<void> {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      const books = await getBooks()
      dispatch(setBooksAction(books))
    } catch (error) {
      console.log('error during load books')
    }
  }
}
