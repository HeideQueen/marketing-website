import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
