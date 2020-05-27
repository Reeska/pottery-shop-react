import { ADD_TO_CART, SET_BOOKS, SET_CART_TOTAL, SET_CART_TOTAL_WITH_PROMO, SET_SEARCH } from './actionTypes';
import { BookType } from '../App/Library/BookList/book.types';
import { Action as ReduxAction, Dispatch } from 'redux';
import { getBooks } from '../App/Library/BookList/book.service';
import { State } from './reducers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { calculateTotal, calculateTotalWithPromo, getOffers } from '../App/Library/Cart/cart.service';

interface SetSearchAction extends ReduxAction {
  type: typeof SET_SEARCH;
  value: string;
}

interface SetBooksAction extends ReduxAction {
  type: typeof SET_BOOKS;
  books: BookType[];
}

interface AddToCartAction extends ReduxAction {
  type: typeof ADD_TO_CART;
  book: BookType;
}

interface SetCartTotalAction extends ReduxAction {
  type: typeof SET_CART_TOTAL;
  total: number;
}

interface SetCartTotalWithPromoAction extends ReduxAction {
  type: typeof SET_CART_TOTAL_WITH_PROMO;
  totalWithPromo: number;
}

export type Action = SetSearchAction
    | SetBooksAction
    | AddToCartAction
    | SetCartTotalAction
    | SetCartTotalWithPromoAction
    ;

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

export function setCartTotal (total: number): SetCartTotalAction {
  return {
    type: SET_CART_TOTAL,
    total,
  };
}

export function setCartTotalWithPromo (totalWithPromo: number): SetCartTotalWithPromoAction {
  return {
    type: SET_CART_TOTAL_WITH_PROMO,
    totalWithPromo,
  };
}

export function addToCartAction (book: BookType): AddToCartAction {
  return {
    type: ADD_TO_CART,
    book,
  };
}

export function addToCart (book: BookType): ThunkAction<void, State, any, Action> {
  return async (dispatch: ThunkDispatch<State, any, Action>, getState: () => State) => {
    dispatch(addToCartAction(book));

    const {cart: {items}} = getState();
    const total = calculateTotal(items);

    dispatch(setCartTotal(total));

    const {offers} = await getOffers(items);

    dispatch(setCartTotalWithPromo(calculateTotalWithPromo(offers, total)));
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
