import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './pages/Root';
import store from './store';


export const renderApp = (locale, messages) => {
  const store = configureStore({
    i18n: {
      messages,
      locale,
    },
  });

  const reduxHistroy = syncHistoryWithStore(
    browserHistory, store
  );

  ReactDOM.render(
    <Provider store={store}>
      <Root history={reduxHistroy} />
    </Provider>
    , document.getElementById('content')
  );
};

// Load polyfills and run the app
export const init = (...args) => {
  // Polyfill Intl and only serve it if the browser needs it
  // @see https://github.com/andyearnshaw/Intl.js/issues/118#issuecomment-120123392
  if (!window.Intl) {
    require.ensure(['intl'], () => {
      require('intl');
      renderApp(...args);
    }, 'intl');
  } else {
    renderApp(...args);
  }
};
