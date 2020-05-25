import { ADD_TO_CART, SET_BOOKS, SET_SEARCH } from './actionTypes';
import { BookType } from '../App/Library/book.types';
import { Dispatch } from 'redux';
import { getBooks } from '../App/Library/book.service';

interface SetSearchAction {
  type: typeof SET_SEARCH;
  value: string;
}

interface SetBooksAction {
  type: typeof SET_BOOKS;
  books: BookType[];
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  book: BookType;
}

export type Action = SetSearchAction
    | SetBooksAction
    | AddToCartAction;

export function setSearchAction (search: string): SetSearchAction {
  return {
    type: SET_SEARCH,
    value: search,
  };
}

export function setBooksAction (books: BookType[]): SetBooksAction {
  return {
    type: SET_BOOKS,
    books,
  };
}

export function addToCartAction(book: BookType): AddToCartAction {
  return {
    type: ADD_TO_CART,
    book,
  };
}

export async function loadBooks (dispatch: Dispatch<Action>): Promise<void> {
  try {
    const books = await getBooks();
    dispatch(setBooksAction(books));
  } catch (error) {
    console.log('error during load books');
  }
}
