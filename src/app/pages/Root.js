import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import AppRoute from './AppRoute';
import Homepage from './Homepage';


// To avoid change routes warning on hot reload
const routes = (
  <Route path="/" component={AppRoute}>
    <IndexRoute component={Homepage} />
    <Route path="homepage" component={Homepage} />
  </Route>
);

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

export default connect()(Root);
