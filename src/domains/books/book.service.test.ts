import { bookFilter } from './book.service'
import { BookType } from './book.types'

describe('book-service', () => {
  it('should filter books with pattern', () => {
    // GIVEN
    const books = [
      {
        title: 'Henri Potier à l\'école des sorciers',
        synopsis: ['Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia'],
      },
      {
        title: 'Henri Potier et la Chambre des secrets',
        synopsis: ['Henri Potier passe l\'été chez les Dursley et reçoit la visite de Dobby'],
      },
    ] as BookType[]

    // WHEN
    const filteredBooks = books.filter(bookFilter('chambre'))

    // THEN
    expect(filteredBooks).toEqual([books[1]])
  })
})
