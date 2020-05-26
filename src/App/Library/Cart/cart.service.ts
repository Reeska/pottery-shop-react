import { BookType } from '../BookList/book.types';

export function calculateTotal (books: BookType[]) {
  return books.reduce((total: number, book: BookType) => total + book.price, 0);
}
