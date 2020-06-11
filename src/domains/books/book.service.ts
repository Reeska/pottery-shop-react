import axios from 'axios';

import { BookType } from './book.types';
import { API_DOMAIN } from '../../config';

export function getBooks (): Promise<BookType[]> {
  return axios
      .get(`${API_DOMAIN}/books`)
      .then(response => response.data);
}

export function bookFilter (filter: string) {
  const lowerCaseFilter = filter.toLowerCase();

  return (book: BookType) => !filter
      || book.title.toLowerCase().includes(lowerCaseFilter)
      || book.synopsis.join().toLowerCase().includes(lowerCaseFilter);
}

export function getBooksFilterBySearch(books: BookType[], search: string): BookType[] {
  return books.filter(bookFilter(search))
}
