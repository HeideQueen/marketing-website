import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';
import Feature1 from './containers/Feature1/Feature1';
import Feature2 from './containers/Feature2/Feature2';
import Feature3 from './containers/Feature3/Feature3';

import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/feature1'>
            <Feature1 />
          </Route>
          <Route path='/feature2'>
            <Feature2 />
          </Route>
          <Route path='/feature3'>
            <Feature3 />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
