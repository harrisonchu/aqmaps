import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Kepler from './Kepler/Kepler'

import './App.scss';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Kepler} />
    </Switch>
  </div>
);

export default App;