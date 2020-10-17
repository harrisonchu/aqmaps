import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Map from './Map/Map';
import LandingPage from './LandingPage/LandingPage';

import './App.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/map" component={Map} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </div>
);

export default App;