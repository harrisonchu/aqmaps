import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MapPage from './MapPage/MapPage';
import LandingPage from './LandingPage/LandingPage';

import './App.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/map" component={MapPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </div>
);

export default App;