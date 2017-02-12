import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>
  , document.getElementById('content')
);
