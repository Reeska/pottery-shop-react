import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookList from './BookList/BookList';
import Cart from './Cart/Cart';
import { UiMain } from '@pottery-ui/react'

function Library () {
  return (
      <UiMain>
        <Switch>
          <Route exact path="/" component={BookList}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </UiMain>
  );
}

export default Library;
