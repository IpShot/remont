import thunk from 'redux-thunk';
import camelize from 'camelize';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'app/sagas/rootSaga';


let redRequire = null;
const createCombinedReducer = () => {
  redRequire = require.context('./reducers/', true, /\.js$/);
  const reducers = {};

  redRequire.keys().forEach(x => {
    const reducerName = camelize(x.substr(x.lastIndexOf('/') + 1, x.length - 5));
    reducers[reducerName] = redRequire(x).default;
  });

  return combineReducers({
    ...reducers,
    routing: routerReducer,
  });
};

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = [];
const middlewares = [
  thunk,
  routerMiddleware(browserHistory),
  sagaMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { persistState } = require('redux-devtools');
  storeEnhancers.push(
    persistState(window.location.href.match(/[?&]debug_session=([^&])\b/))
  );
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  ...storeEnhancers
)(createStore);

export default function configureStore(initialState) {
  const reducer = createCombinedReducer();
  const store = finalCreateStore(reducer, initialState);
  let sagas = sagaMiddleware.run(rootSaga);

  // Enable Webpack hot module replacement for reducers and sagas
  // in dev mode if HMR available
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept(redRequire.id, () => {
        const nextReducer = createCombinedReducer();
        store.replaceReducer(nextReducer);
      });

      module.hot.accept('app/sagas/rootSaga', () => {
        const newSagas = require('app/sagas/rootSaga').default;
        sagas.cancel();
        sagas.done.then(() => {
          sagas = sagaMiddleware.run(newSagas)
        });
      });
    }
  }

  return store;
}
