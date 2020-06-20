import React, {
  useCallback,
  useEffect,
} from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { UiBookList } from '@pottery-ui/react'

import { State } from '../../../store/reducers'
import { addToCart } from '../../../store/cart/actions'
import { loadBooks } from '../../../store/books/actions'
import { selectFilteredBooks } from '../../../store/books/selectors'

function BookList() {
  const search = useSelector((state: State) => state.search)
  const books = useSelector(selectFilteredBooks)
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(
    (event: CustomEvent<string>) => dispatch(addToCart(event.detail)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(loadBooks())
  }, [dispatch])

  return (
    <UiBookList search={search} books={books} onAddToCart={handleAddToCart} />
  )
}

export default BookList
