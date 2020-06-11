import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UiCartLink from '../../../../components/ui/Navbar/UiCartLink/UiCartLink';
import { State } from '../../../../store/reducers';
import { BookType } from '../../../../domains/books/book.types';

interface CartLinkProps {
  count: number;
}

function CartLink ({count}: CartLinkProps) {
  return (
      <Link to="/cart"><UiCartLink count={count}/></Link>
  );
}

function getCartLength (cart: BookType[]): number {
  return cart.length;
}

const mapStateToProps = (state: State) => ({
  count: getCartLength(state.cart.items),
});

export default connect(
    mapStateToProps,
)(CartLink);
