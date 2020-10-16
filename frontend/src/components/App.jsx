import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Map from './Map/Map';
import CountrySelect from './CountrySelect/CountrySelect';

import './App.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/map" component={Map} />
      <Route exact path="/" component={CountrySelect} />
    </Switch>
  </div>
);

export default App;