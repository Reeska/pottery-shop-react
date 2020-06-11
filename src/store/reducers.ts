import { combineReducers } from 'redux'
import {
  booksReducer,
  BooksState,
} from './books/reducer'
import {
  searchReducer,
  SearchState,
} from './search/reducer'
import {
  cartReducer,
  CartState,
} from './cart/reducer'

export interface State {
  search: SearchState;
  books: BooksState;
  cart: CartState;
}
