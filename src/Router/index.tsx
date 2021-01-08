import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Os from '../Pages/OS';
import Config from '../Pages/Config';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Os} />
      <Route path="/settings" component={Config} />
      <Route component={() => <h1>NotFound</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
