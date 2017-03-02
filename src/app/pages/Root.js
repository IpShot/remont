import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import AppRoute from './AppRoute';
import Homepage from './Homepage';


const Root = (props) => (
  <Router {...props}>
    <Route path="/" component={AppRoute}>
      <IndexRoute component={Homepage} />
      <Route path="homepage" component={Homepage} />
    </Route>
  </Router>
);

export default connect()(Root);
