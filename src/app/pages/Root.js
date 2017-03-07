import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import AppRoute from './AppRoute';
import Homepage from './Homepage';


const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppRoute}>
        <IndexRoute component={Homepage} />
        <Route path="homepage" component={Homepage} />
      </Route>
    </Router>
  </Provider>
);

export default connect()(Root);
