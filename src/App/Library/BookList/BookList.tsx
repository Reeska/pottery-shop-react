import React, {
  useCallback,
  useEffect,
} from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { BookType } from '../../../domains/books/book.types'
import { State } from '../../../store/reducers'
import UiBookList from '../../../components/ui/UiBookList/UiBookList'

import { addToCart } from '../../../store/cart/actions'
import { loadBooks } from '../../../store/books/actions'
import { selectFilteredBooks } from '../../../store/books/selectors'

function BookList() {
  const search = useSelector((state: State) => state.search)
  const books = useSelector(selectFilteredBooks)
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(
    (book: BookType) => dispatch(addToCart(book)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(loadBooks())
  }, [dispatch])

  return (
    <UiBookList search={search} books={books} addToCart={handleAddToCart}/>
  )
}

export default BookList
