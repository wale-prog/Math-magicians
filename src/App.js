import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Welcome from './components/Welcome';
import Quotes from './components/Quotes';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quotes">
        <Quotes />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </div>
);

export default App;
