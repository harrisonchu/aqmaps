import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Kepler from './Kepler/Kepler';
import CountrySelect from './CountrySelect/CountrySelect';

import './App.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/map" component={Kepler} />
      <Route exact path="/" component={CountrySelect} />
    </Switch>
  </div>
);

export default App;