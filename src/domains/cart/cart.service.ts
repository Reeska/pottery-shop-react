import axios from 'axios';

import { BookType } from '../books/book.types';
import { API_DOMAIN } from '../../config';
import { Offer, Offers, OfferType } from './cart.types';

export function calculateTotal (books: BookType[]) {
  return books.reduce((total: number, book: BookType) => total + book.price, 0);
}

const applyOffer = (total: number) => (offer: Offer) => {
  switch (offer.type) {
    case OfferType.MINUS:
      return total - offer.value;
    case OfferType.PERCENTAGE:
      return total * (1 - offer.value / 100);
    case OfferType.SLICE:
      return total - (Math.floor(total / offer.sliceValue) * offer.value);
  }
};

export function calculateTotalWithPromo (offers: Offer[], total: number): number {
  return Math.min(...offers.map(applyOffer(total)));
}

export function getOffers (books: BookType[]): Promise<Offers> {
  const isbns = books.map(book => book.isbn).join(',');
  return axios
      .get<Offers>(`${API_DOMAIN}/books/${isbns}/commercialOffers`)
      .then(response => response.data);
}
