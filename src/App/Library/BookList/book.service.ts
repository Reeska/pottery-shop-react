import { BookType } from './book.types';
import axios from 'axios';

const API_DOMAIN = 'http://henri-potier.xebia.fr';

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
