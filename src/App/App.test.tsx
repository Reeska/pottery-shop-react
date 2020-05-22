import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from '../store';
import { Provider as ReduxProvider } from 'react-redux';

test('renders learn react link', () => {
  const {getByText} = render(
      <ReduxProvider store={store}>
        <App/>
      </ReduxProvider>
  );
  const linkElement = getByText(/Pottery Shop/i);
  expect(linkElement).toBeInTheDocument();
});
