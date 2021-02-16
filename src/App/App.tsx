import React from 'react';

import Header from './Header/Header';
import Library from './Library/Library';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Library/>
        </Router>
      </div>
  );
}

export default App;
