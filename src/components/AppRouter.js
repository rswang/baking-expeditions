import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import Layout from './layout/Layout';
import About from './pages/About';
import Home from './pages/Home';

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='/about' component={About} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
