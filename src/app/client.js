import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData } from 'react-intl';
import Root from './pages/Root';
import configureStore from './store';
import ruMessages from './translations/ru_RU';


const renderApp = (locale, messages) => {
  addLocaleData(require(`react-intl/locale-data/${locale.slice(0, 2)}`));

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
const init = (...args) => {
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

init('ru_RU', ruMessages);
