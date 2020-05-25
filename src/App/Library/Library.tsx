import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Library.scss';
import BookList from './BookList/BookList';
import Cart from './Cart/Cart';

function Library () {
  return (
      <div className="library">
        <Switch>
          <Route exact path="/" component={BookList}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
  );
}

export default Library;
