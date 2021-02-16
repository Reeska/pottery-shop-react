import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'

import UiBook from './UiBook'
import { BookType } from '../../../domains/books/book.types'
import userEvent from '@testing-library/user-event'

describe('UiBook', () => {
  it('should display book data', () => {
    // GIVEN
    const addToCartMock = jest.fn()
    const book: BookType = {
      isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
      title: 'Henri Potier et le Prisonnier d\'Azkaban',
      price: 30,
      cover: 'https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media',
      synopsis: [
        'Lorem ipsum',
      ],
    }

    render(
      <UiBook book={book} addToCart={addToCartMock}/>,
    )

    // WHEN
    // THEN
    expect(screen.getByText('Henri Potier et le Prisonnier d\'Azkaban')).toBeInTheDocument()
    expect(screen.getByText('30 $')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Add to cart'})).toBeInTheDocument()
  })

  it('should trigger addToCart when user clicks on Add to cart button', () => {
    // GIVEN
    const addToCartMock = jest.fn()
    const book: BookType = {
      isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
      title: 'Henri Potier et le Prisonnier d\'Azkaban',
      price: 30,
      cover: 'https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media',
      synopsis: [
        'Lorem ipsum',
      ],
    }

    render(
      <UiBook book={book} addToCart={addToCartMock}/>,
    )

    // WHEN
    userEvent.click(screen.getByRole('button', {name: 'Add to cart'}))

    // THEN
    expect(addToCartMock).toHaveBeenCalled()
  })
})
