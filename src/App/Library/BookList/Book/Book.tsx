import React from 'react';

import './Book.scss';
import { BookType } from '../../book.types';

interface BookProps {
  book: BookType;
}

function Book (props: BookProps) {
  const {title, price, isbn, cover, synopsis} = props.book;
  return (
      <article className="book">
        <img className="book__cover" src={cover}/>
        <div className="book__panel">
          <h3 className="book__title">{title}</h3>
          <div className="book__price">{price} $</div>
          <div className="book__cart">
            <button>Add to cart</button>
          </div>
        </div>
      </article>
  );
}

export default Book;
