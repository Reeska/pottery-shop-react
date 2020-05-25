import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UiCartButton from '../../../../components/ui/Navbar/UiCartButton/UiCartButton';
import { State } from '../../../../store/reducers';
import { BookType } from '../../../Library/book.types';

interface CartButtonProps {
  count: number;
}

function CartButton ({count}: CartButtonProps) {
  return (
      <Link to="/cart">
        <UiCartButton count={count}/>
      </Link>
  );
}

function getCartLength (cart: BookType[]): number {
  return cart.length;
}

const mapStateToProps = (state: State) => ({
  count: getCartLength(state.cart),
});

export default connect(
    mapStateToProps,
)(CartButton);
